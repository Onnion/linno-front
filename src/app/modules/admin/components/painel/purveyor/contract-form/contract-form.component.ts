import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import * as _ from 'lodash';
import { BankAccountsService } from '../../../../services/entites/bank-accounts/bank-accounts.service';
import { NotifyService } from '../../../../services/notify/notify.service';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css']
})
export class ContractFormComponent implements OnInit {

  @Input() mode: string;
  @Input() user: Observable<any>;
  @Input() brand: Observable<any>;
  @Input() edit: Observable<any>;
  @Input() data: any;
  @Output() save: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;
  public contractFormActivated = false;
  public contractActived = false;
  public banks: any = null;
  public userData: any;
  public brandData: any;
  public submitForm: boolean;
  public status_form = {
    bank_account: {
      agency: {modify: false, error: false, loading: false},
      agency_digit: {modify: false, error: false, loading: false},
      account: {modify: false, error: false, loading: false},
      account_digit: {modify: false, error: false, loading: false},
      owner_name: {modify: false, error: false, loading: false},
      bank_id: {modify: false, error: false, loading: false}
    }
  };


  constructor(
    private formBuilder: FormBuilder,
    private bankAccountService: BankAccountsService,
    private notify: NotifyService) { }


  private initFormControls(data: any = null): void {

    const controls: any = {
      agency: [data ? data.bank_accounts[0] ? data.bank_accounts[0].agency : '' : '', [Validators.required]],
      agency_digit: [data ? data.bank_accounts[0] ? data.bank_accounts[0].agency_digit : '' : '', [Validators.required]],
      account: [data ? data.bank_accounts[0] ? data.bank_accounts[0].account : '' : '', [Validators.required]],
      account_digit: [data ? data.bank_accounts[0] ? data.bank_accounts[0].account_digit : '' : '', [Validators.required]],
      owner_name: [data ? data.bank_accounts[0] ? data.bank_accounts[0].owner_name : '' : '', [Validators.required]],
      bank_id: [data ? data.bank_accounts[0] ? data.bank_accounts[0].bank_id : '' : '', [Validators.required]]
    };

    this.form = this.formBuilder.group(controls);

  }


  private listBanks() {
    this.bankAccountService.getBanks().subscribe(
      (res: any)   => {
        this.banks = res.data;
      },
      (error) => {
        console.log(error);

      }
    );
  }


  private createContractData() {
    let fieldsBankAccount = {};

    if (this.mode === 'edit') {

      _.forEach(this.status_form.bank_account, (value, field) => {
        if (value.modify) {

          value = this.form.controls[field].value;

          fieldsBankAccount = {
            ...fieldsBankAccount,
            [field]: value
          };

        }
      });

      fieldsBankAccount = {
        ...fieldsBankAccount,
        id: this.data.bank_accounts[0].id
      };

    } else {

      fieldsBankAccount = {
        ...fieldsBankAccount,
        agency: this.form.controls.agency.value,
        agency_digit: this.form.controls.agency_digit.value,
        account: this.form.controls.account.value,
        account_digit: this.form.controls.account_digit.value,
        owner_name: this.form.controls.owner_name.value,
        bank_id: this.form.controls.bank_id.value
      };

    }

    fieldsBankAccount = {
      ...fieldsBankAccount,
      user_id: this.data ? this.data.id : this.userData && this.userData.id,

    }

    return {fieldsBankAccount};
  }


  public submit() {

    if (this.form.valid) {

      const data = this.createContractData();

      const dataBankAccount = data.fieldsBankAccount;

      this.bankAccountService[((this.mode === 'edit') && (this.data.bank_accounts.length > 0)) ? 'update' : 'store'](dataBankAccount).subscribe(
        (bankAccount) => {
          this.save.emit(bankAccount.data);
          this.submitForm = true;
          this.notify.show('success', `Contrato ${this.mode === 'edit' ? 'atualizado' : 'cadastrado'} com sucesso`);
        },
        (err) => {}
      );

    }

  }


  public modifyField(field: string, type: string) {
    this.status_form[type][field].modify = true;
  }


  public activeAddContract(): boolean {
    return (
      this.contractActived &&
      (!this.contractFormActivated &&
        (this.mode === 'edit' && this.data && this.data.contracts.length <= 0) ||
        this.mode === 'create')
    );
  }

  public getSubmitName(): string {
    if (this.mode === 'edit') {
      return 'Atualizar';
    } else {
      return 'Cadastrar';
    }
  }


  ngOnInit() {
    if (this.mode === 'edit') {
      this.edit.subscribe( (editDataUser: any) => {
        this.contractActived = true;
        this.initFormControls(editDataUser);

      });

    } else {
      this.user.subscribe( (user: any) => {
        this.userData = user;
        this.brand.subscribe( (brand: any) => {
          this.brandData = brand;

          this.initFormControls();
          this.contractActived = true;
        })
      });

    }

    this.listBanks();

  }

}
