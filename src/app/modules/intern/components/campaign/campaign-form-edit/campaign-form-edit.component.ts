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
        code_ax: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
        trading_name: ['', [Validators.required]],
        observation: ['', [Validators.required]]
      }
    );
  }


  private setDistributorEmail() {
    const distributor = this.form.controls.distributor.value;
    const distributorEmails = [
      { distributor: 'COMAL', email: 'hugo@mouraes.com.br' },
      { distributor: 'UNIÃO', email: 'isabela.celestino@mourasp.com.br' },
      { distributor: 'DISBATE', email: 'vendas.interior@disbate.com.br' },
      { distributor: 'DISBAC', email: 'joel.bremm@disbac.com.br' },
      { distributor: 'DIRPAL', email: 'alana.pimentel@dirpal.com.br' },
      { distributor: 'AVIC FILIAL JOINVILLE', email: 'e.albino@mourapr.com.br' },
      { distributor: 'BRASILIENSE', email: 'joefran @mouradf.com.br' },
      { distributor: 'FLUMINENSE', email: 'Thiago.pereira@mourario.com' },
      { distributor: 'TRIÂNGULO', email: 'rodrigo.cabral@mouratriangulo.com.br' },
      { distributor: 'FORTALEZA', email: 'victor@mourafortaleza.com.br' },
      { distributor: 'PARAÍBA', email: 'ricardo.b@mourapb.com.br' },
      { distributor: 'PALÁCIO', email: 'leonardo.franca@palaciodasbaterias.com.br' },
      { distributor: 'RODMASTER', email: 'lucas.oliveira@mourars.com.br' },
      { distributor: 'CAMPO GRANDE', email: 'jose.neto@grupomourams.com' },
      { distributor: 'CODIBA', email: 'ricardo.moura@mouranatal.com' },
      { distributor: 'BANDEIRANTES', email: 'altair@moura15.com' },
      { distributor: 'AUTOBATE', email: 'p.carmo@moura-ba.com' },
      { distributor: 'CATARINENSE', email: 'rhuan.carvalho@mourasc.com.br' }
    ];

    return distributorEmails.filter($distributor => distributor.toUpperCase().includes($distributor.distributor.toUpperCase()))[0]
  }


  public submit(): void {
    if (this.form.valid) {
      this.loading = true;
      const distributor = this.setDistributorEmail();

      const form = {
        ...this.form.value,
        distributor_email: distributor ? distributor.email : '' 
      }

      this.mouraService.store(form).subscribe(
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

  public goToRegister(): void {
    this.route.navigate(['/cadastro']);
  }

  ngOnInit() {
    this.initFormControls();
  }
}
