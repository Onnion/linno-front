import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LeadMouraService } from "../../../services/lead-moura/lead-moura.service";
import { SwalComponent } from "@toverux/ngx-sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: "app-campaign-form-edit",
  templateUrl: "./campaign-form-edit.component.html",
  styleUrls: ["./campaign-form-edit.component.css"],
  providers: [LeadMouraService]
})
export class CampaignFormEditComponent implements OnInit {
  @ViewChild("successSwal") private successSwal: SwalComponent;
  @ViewChild("errorSwal") private errorSwal: SwalComponent;

  public loading = false;
  public form: FormGroup;
  public distributors = [
    'Alagoana Matriz',
    'Alagoana Filial Arapiraca',
    'Anápolis',
    'Autobate Matriz',
    'Autobate Filial Itabuna',
    'Avic Matriz',
    'Avic Filial Guarapuava',
    'Avic Filial Joinville',
    'Avic Filial Ponta Grossa',
    'Bandeirantes Matriz',
    'Bandeirantes Filial Poços',
    'Batermol',
    'Bauru',
    'Belo Jardim',
    'Bonfim',
    'Brasiliense',
    'Campo Grande Matriz',
    'Campo Grande Filial Dourados',
    'Catarinense Matriz',
    'Catarinense Filial Blumenau',
    'Catarinense Filial Criciúma',
    'Chapecoense Matriz',
    'Chapecoense Filial Lages',
    'Codiba',
    'Comal Matriz',
    'Comal Filial Cachoeiro',
    'Comal Filial Linhares',
    'Combat Matriz',
    'Combat Filial Juazeiro',
    'Cominas Matriz',
    'Cominas Filial Patos de Minas',
    'Conorte',
    'Dinil',
    'Dirpal',
    'Disbac Matriz',
    'Disbac Filial Sinop',
    'Disbate',
    'Dismal Matriz',
    'Dismal Filial Imperatriz',
    'Fluminense Matriz',
    'Fluminense Filial Campo Grande',
    'Fortaleza Matriz',
    'Fortaleza Filial Iguatu',
    'Fortaleza Filial Sobral',
    'Godal',
    'Interbahia Matriz',
    'Interbahia Filial Barreiras',
    'Interbahia Filial Conquista',
    'Juiz de Fora',
    'Norte',
    'Nova Iguaçu',
    'Palácio',
    'Paraense Matriz',
    'Paraense Filial Macapá',
    'Paraense Filial Marabá',
    'Paraense Filial Santarém',
    'Paraíba',
    'Paulista Matriz',
    'Paulista Filial Campo Limpo',
    'Paulista Filial Osasco',
    'Piauiense',
    'Porto Velho',
    'Presidente Prudente',
    'Rodmaster Matriz',
    'Rodmaster Filial Caxias',
    'Santa Maria Matriz',
    'Santa Maria Filial Passo Fundo',
    'Serve Vale Matriz',
    'Serve Vale Filial Taubaté',
    'Sorocaba',
    'Tocantins',
    'Triângulo',
    'União Matriz',
    'União Filial Santos',
    'Volta Redonda'
  ];

  constructor(private route: Router, private fb: FormBuilder, private mouraService: LeadMouraService) { }

  private initFormControls(): void {
    this.form = this.fb.group(
      {
        distributor: ['', [Validators.required]],
        code_ax: ['', [Validators.required]],
        trading_name: ['', [Validators.required]],
        observation: ['', [Validators.required]]
      }
    );
  }

  public submit() {
    if (this.form.valid) {
      this.loading = true;

      this.mouraService.store(this.form.value).subscribe(
        (res) => { 
          setTimeout(() => {
            this.loading = false;

            this.successSwal.show();
          }, 1000);
         },
        (error) => { 
          console.log(error)
          setTimeout(() => {
            this.loading = false;

            this.errorSwal.show();
          }, 1000);
        }
      );
    }
  }

  public goToRegister() {
    this.route.navigate(['/cadastro']);
  }

  ngOnInit() {
    this.initFormControls();
  }
}
