import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import * as moment from 'moment';
import { BrandService } from '../../../../services/entites/brands/brand.service';
import { UsersService } from '../../../../services/entites/users/users.service';
import { AddressService } from '../../../../services/entites/address/address.service';
import { ContractsService } from '../../../../services/entites/contracts/contracts.service';
import { NichesService } from '../../../../services/entites/niches/niches.service';
import { NotifyService } from '../../../../services/notify/notify.service';
import { cleanUp } from 'src/app/app.utils';

@Component({
  selector: 'app-brand-form',
  templateUrl: './brand-form.component.html',
  styleUrls: ['./brand-form.component.css']
})
export class BrandFormComponent implements OnInit {

  @Input() mode: string;
  @Input() user: Observable<any>;
  @Input() edit: Observable<any>;
  @Input() data: any;
  @Output() saveBrand: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup;
  public brandFormActivated = false;
  public brandActivated = false;
  public submitForm = false;
  public niches: any = null;
  public userData: any;
  public brandData: any;
  public franchises: any = null;
  public status_form = {
    brand: {
      description: { modify: false, error: false, loading: false },
      name: { modify: false, error: false, loading: false }
    },
    address: {
      postal_code: { modify: false, error: false, loading: false },
      street: { modify: false, error: false, loading: false },
      number: { modify: false, error: false, loading: false },
      district: { modify: false, error: false, loading: false },
      city: { modify: false, error: false, loading: false },
      state: { modify: false, error: false, loading: false },
      country: { modify: false, error: false, loading: false },
      complement: { modify: false, error: false, loading: false }
    },
    contracts: {
      begin_contract: { modify: false, error: false, loading: false },
      end_contract: { modify: false, error: false, loading: false },
      value: { modify: false, error: false, loading: false },
      niche_id: { modify: false, error: false, loading: false },
      franchise_id: { modify: false, error: false, loading: false }
    }
  };

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private brandService: BrandService,
    private contractService: ContractsService,
    private addressService: AddressService,
    private nichesService: NichesService,
    private notify: NotifyService) { }


  private listNiches() {
    this.nichesService.get().subscribe(
      (res) => {
        this.niches = res.data;
      },
      (error) => {
        console.log(error);

      }
    );
  }


  private listFranchise() {
    this.brandService.getFranchises().subscribe(
      (res) => {
        this.franchises = res.data;
      },
      (error) => {
        console.log(error);

      }
    );
  }


  private validAddressForm() {

    const controls = this.form.controls;

    return (
      controls.postal_code.value &&
      controls.street.value &&
      controls.number.value &&
      controls.district.value &&
      controls.city.value &&
      controls.state.value &&
      true
    )
  }


  /**
   *
   * @param field
   * @param type
   */
  public modifyField(field: string, type: string) {
    this.status_form[type][field].modify = true;
  }


  private modifyFields(data: any = null): void {
    if (data && data.addresses[0] && data.addresses[0].postal_code) { this.modifyField('postal_code', 'address') }
    if (data && data.addresses[0] && data.addresses[0].street) { this.modifyField('street', 'address') }
    if (data && data.addresses[0] && data.addresses[0].number) { this.modifyField('number', 'address') }
    if (data && data.addresses[0] && data.addresses[0].district) { this.modifyField('district', 'address') }
    if (data && data.addresses[0] && data.addresses[0].city) { this.modifyField('city', 'address') }
    if (data && data.addresses[0] && data.addresses[0].state) { this.modifyField('state', 'address') }
    if (data && data.addresses[0] && data.addresses[0].complement) { this.modifyField('complement', 'address') }

    if (data && data.contracts[0] && data.contracts[0].brand && data.contracts[0].brand.description) { this.modifyField('description', 'brand') }
    if (data && data.contracts[0] && data.contracts[0].brand && data.contracts[0].brand.name) { this.modifyField('name', 'brand') }

    if (data && data.contracts[0] && data.contracts[0].begin_contract) { this.modifyField('begin_contract', 'contracts') }
    if (data && data.contracts[0] && data.contracts[0].end_contract) { this.modifyField('end_contract', 'contracts') }
    if (data && data.contracts[0] && data.contracts[0].value) { this.modifyField('value', 'contracts') }
    if (data && data.contracts[0] && data.contracts[0].franchise_id) { this.modifyField('franchise_id', 'contracts') }
    if (data && data.contracts[0] && data.contracts[0].niche.id) { this.modifyField('niche_id', 'contracts') }

  }


  public cepSearch() {

    this.status_form.address.postal_code.loading = true;
    const form = this.form.controls;
    const cep = form.postal_code.value;

    if (cep) {

      this.usersService.cepSearch(cep).subscribe(
        (res) => {

          this.status_form.address.postal_code.loading = false;

          const address = res;
          const controls = this.form.controls;

          setTimeout(() => {
            controls['city'].setValue(address.city);
            controls['street'].setValue(address.street);
            controls['district'].setValue(address.district);
            controls['state'].setValue(address.state);

            this.modifyField('state', 'address');
            this.modifyField('district', 'address');
            this.modifyField('street', 'address');
            this.modifyField('city', 'address');

            if (controls.postal_code.value) {

              _.forEach(this.status_form.address, (value, field) => {

                if (field !== 'country' && field !== 'complement') {
                  controls[field].setValidators([Validators.required]);
                  controls[field].updateValueAndValidity();
                }

              });

            }

          }, 500);

        },
        (error) => { }
      )

    }

  }


  private createBrandData(brand_id: any = null) {
    let fieldsAddress = {};
    let fieldsBrand = {};
    let fieldsContract = {};

    if (this.mode === 'edit') {


      _.forEach(this.status_form.contracts, (value, field) => {
        if (value.modify) {

          value = (field === 'end_contract' || field === 'begin_contract') ? moment(this.form.controls[field].value).format('YYYY-MM-DD') : this.form.controls[field].value;

          fieldsContract = {
            ...fieldsContract,
            [field]: value
          };

        }
      });

      fieldsContract = {
        ...fieldsContract,
        user_id: this.data.id
      };

      _.forEach(this.status_form.address, (value, field) => {
        if (value.modify) {

          value = field === 'postal_code' ? cleanUp(this.form.controls[field].value) : this.form.controls[field].value;

          fieldsAddress = {
            ...fieldsAddress,
            [field]: value
          };

        }
      });

      fieldsAddress = {
        ...fieldsAddress,
        user_id: this.data.id,
        country: 'BR'
      };

      _.forEach(this.status_form.brand, (value, field) => {
        if (value.modify) {

          value = this.form.controls[field].value;

          fieldsBrand = {
            ...fieldsBrand,
            [field]: value
          };

        }
      });

    } else {

      fieldsContract = {
        ...fieldsContract,
        begin_contract: moment(this.form.controls.begin_contract.value).format('YYYY-MM-DD'),
        end_contract: moment(this.form.controls.end_contract.value).format('YYYY-MM-DD'),
        value: this.form.controls.value.value,
        niche_id: this.form.controls.niche_id.value,
        franchise_id: this.form.controls.franchise_id.value,
        user_id: this.data ? this.data.id : this.userData && this.userData.id,

      };

      fieldsBrand = {
        ...fieldsBrand,
        description: this.form.controls.description.value,
        name: this.form.controls.name.value
      };

      fieldsAddress = {
        ...fieldsAddress,
        postal_code: this.form.controls.postal_code.value,
        street: this.form.controls.street.value,
        number: this.form.controls.number.value,
        district: this.form.controls.district.value,
        city: this.form.controls.city.value,
        state: this.form.controls.state.value,
        country: this.form.controls.country.value,
        complement: this.form.controls.complement.value,
        user_id: this.data ? this.data.id : this.userData && this.userData.id,
      };

    }

    return { fieldsAddress, fieldsBrand, fieldsContract };
  }


  private initFormControls(data: any = null): void {

    // this.modifyFields(data);

    const controls: any = {
      postal_code: [data ? data.addresses[0] ? data.addresses[0].postal_code : '' : '', [Validators.required]],
      street: [data ? data.addresses[0] ? data.addresses[0].street : '' : '', []],
      number: [data ? data.addresses[0] ? data.addresses[0].number : '' : '', []],
      district: [data ? data.addresses[0] ? data.addresses[0].district : '' : '', []],
      city: [data ? data.addresses[0] ? data.addresses[0].city : '' : '', []],
      state: [data ? data.addresses[0] ? data.addresses[0].state : '' : '', []],
      country: ['BR'],
      complement: [data ? data.addresses[0] ? data.addresses[0].complement : '' : '', []],

      description: [data ? data.contracts[0] ? data.contracts[0].brand ? data.contracts[0].brand.description : '' : '' : '', []],
      name: [data ? data.contracts[0] ? data.contracts[0].brand ? data.contracts[0].brand.name : '' : '' : '', [Validators.required]],

      begin_contract: [data ? data.contracts[0] ? data.contracts[0].begin_contract : '' : '', [Validators.required]],
      end_contract: [data ? data.contracts[0] ? data.contracts[0].end_contract : '' : '', [Validators.required]],
      value: [data ? data.contracts[0] ? data.contracts[0].value : '' : '', [Validators.required]],
      franchise_id: [data ? data.contracts[0] ? data.contracts[0].franchise.id : '' : '', [Validators.required]],
      niche_id: [data ? data.contracts[0] ? data.contracts[0].niche.id : '' : '', [Validators.required]]
    };

    this.form = this.formBuilder.group(controls);

  }


  public activeAddBrand(): boolean {
    return (
      this.brandActivated &&
      (!this.brandFormActivated &&
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


  public submit() {

    const data = this.createBrandData();
    let dataAddres = data.fieldsAddress;
    let dataBrand = data.fieldsBrand;
    let dataContract = data.fieldsContract;

    if (this.form.valid) {

      if (this.mode === 'edit') {
        if (this.validAddressForm()) {
          if (this.data && this.data.addresses.length > 0) {
            dataAddres = {
              ...dataAddres,
              id: this.data.addresses[0].id
            }
          }
        }

        if (this.data.contracts.length > 0) {
          dataContract = {
            ...dataContract,
            id: this.data.contracts[0].id
          };

          dataBrand = {
            ...dataBrand,
            id: this.data.contracts[0].brand.id
          }
        }
      } else {
        if (this.validAddressForm()) {
          dataAddres = {
            ...dataAddres,
            user_id: this.userData.id
          }
        }
      }

      if (this.validAddressForm()) {
        this.addressService[((this.mode === 'edit') && (this.data && this.data.addresses.length > 0)) ? 'update' : 'store'](dataAddres).subscribe(
          (address) => {
          },
          (err) => { this.submitForm = false }
        );
      }

      this.brandService[((this.mode === 'edit') && (this.data.contracts[0] && this.data.contracts[0].brand)) ? 'update' : 'store'](dataBrand).subscribe(
        (brand) => {
          this.saveBrand.emit(brand.data);
          this.submitForm = true;
          this.brandData = brand.data;
          this.notify.show('success', `Marca ${this.mode === 'edit' ? 'atualizada' : 'cadastrada'} com sucesso`);


          dataContract = {...dataContract, brand_id:  this.brandData.id};

          this.contractService[((this.mode === 'edit') && (this.data.contracts.length > 0)) ? 'update' : 'store'](dataContract).subscribe(
            (contract) => {
              this.submitForm = true;
            },
            (err) => { this.submitForm = false }
          );
        },
        (err) => { this.submitForm = false }
      );

    }

  }


  ngOnInit() {

    if (this.mode === 'edit') {
      this.edit.subscribe((editDataUser: any) => {
        this.brandActivated = true;
        this.data = editDataUser;
        this.initFormControls(editDataUser);

      });

    } else {
      this.user.subscribe((user: any) => {
        this.initFormControls();
        this.brandActivated = true;
        this.userData = user;
      });

    }


    this.listNiches();
    this.listFranchise();
  }

}
