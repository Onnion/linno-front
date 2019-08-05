import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadMouraService } from '../../../services/lead-moura/lead-moura.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-form-edit',
  templateUrl: './campaign-form-edit.component.html',
  styleUrls: ['./campaign-form-edit.component.css'],
  providers: [LeadMouraService]
})
export class CampaignFormEditComponent implements OnInit {
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('errorSwal') private errorSwal: SwalComponent;

  public loading = false;
  public form: FormGroup;
  public distributors = [
    // 'Alagoana Matriz',
    // 'Alagoana Filial Arapiraca',
    // 'Anápolis',
    'Autobate Matriz',
    'Autobate Filial Itabuna',
    'Avic Matriz',
    'Avic Filial Guarapuava',
    'Avic Filial Joinville',
    'Avic Filial Ponta Grossa',
    'Bandeirantes Matriz',
    'Bandeirantes Filial Poços',
    // 'Batermol',
    // 'Bauru',
    // 'Belo Jardim',
    // 'Bonfim',
    'Brasiliense',
    'Campo Grande Matriz',
    'Campo Grande Filial Dourados',
    'Catarinense Matriz',
    'Catarinense Filial Blumenau',
    'Catarinense Filial Criciúma',
    // 'Chapecoense Matriz',
    // 'Chapecoense Filial Lages',
    'Codiba',
    'Comal Matriz',
    'Comal Filial Cachoeiro',
    'Comal Filial Linhares',
    'Cominas Matriz',
    // 'Combat Matriz',
    // 'Combat Filial Juazeiro',
    // 'Cominas Matriz',
    // 'Cominas Filial Patos de Minas',
    // 'Conorte',
    // 'Dinil',
    'Dirpal',
    'Disbac Matriz',
    'Disbac Filial Sinop',
    'Disbate',
    // 'Dismal Matriz',
    // 'Dismal Filial Imperatriz',
    'Fluminense Matriz',
    'Fluminense Filial Campo Grande',
    'Fortaleza Matriz',
    'Fortaleza Filial Iguatu',
    'Fortaleza Filial Sobral',
    'Godal',
    // 'Interbahia Matriz',
    // 'Interbahia Filial Barreiras',
    // 'Interbahia Filial Conquista',
    // 'Juiz de Fora',
    // 'Norte',
    // 'Nova Iguaçu',
    'Palácio',
    // 'Paraense Matriz',
    // 'Paraense Filial Macapá',
    // 'Paraense Filial Marabá',
    // 'Paraense Filial Santarém',
    'Paraíba',
    // 'Paulista Matriz',
    // 'Paulista Filial Campo Limpo',
    // 'Paulista Filial Osasco',
    // 'Piauiense',
    // 'Porto Velho',
    // 'Presidente Prudente',
    'Rodmaster Matriz',
    'Rodmaster Filial Caxias',
    // 'Santa Maria Matriz',
    // 'Santa Maria Filial Passo Fundo',
    // 'Serve Vale Matriz',
    // 'Serve Vale Filial Taubaté',
    // 'Sorocaba',
    // 'Tocantins',
    'Triângulo',
    'União Matriz',
    'União Filial Santos',
    // 'Volta Redonda'
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
      { pathName: 'COMAL', email: 'hugo@mouraes.com.br' },
      { pathName: 'COMINAS', email: 'rodrigo.pimentel@cominasbh.com.br' },
      { pathName: 'UNIÃO', email: 'isabela.celestino@mourasp.com.br' },
      { pathName: 'DISBATE', email: 'vendas.interior@disbate.com.br' },
      { pathName: 'DISBAC', email: 'joel.bremm@disbac.com.br' },
      { pathName: 'DIRPAL', email: 'alana.pimentel@dirpal.com.br' },
      { pathName: 'AVIC', email: 'e.albino@mourapr.com.br' },
      { pathName: 'BRASILIENSE', email: 'joefran @mouradf.com.br' },
      { pathName: 'FLUMINENSE', email: 'Thiago.pereira@mourario.com' },
      { pathName: 'TRIÂNGULO', email: 'rodrigo.cabral@mouratriangulo.com.br' },
      { pathName: 'FORTALEZA', email: 'victor@mourafortaleza.com.br' },
      { pathName: 'PARAÍBA', email: 'ricardo.b@mourapb.com.br' },
      { pathName: 'PALÁCIO', email: 'leonardo.franca@palaciodasbaterias.com.br' },
      { pathName: 'RODMASTER', email: 'lucas.oliveira@mourars.com.br' },
      { pathName: 'CAMPO GRANDE', email: 'jose.neto@grupomourams.com' },
      { pathName: 'CODIBA', email: 'ricardo.moura@mouranatal.com' },
      { pathName: 'BANDEIRANTES', email: 'altair@moura15.com' },
      { pathName: 'AUTOBATE', email: 'p.carmo@moura-ba.com' },
      { pathName: 'CATARINENSE', email: 'rhuan.carvalho@mourasc.com.br' },
    ];

    return distributorEmails
    .filter($distributor => distributor.toUpperCase().includes($distributor.pathName.toUpperCase()))[0];
  }

  public submit(): void {
    if (this.form.valid) {
      this.loading = true;
      const distributor = this.setDistributorEmail();

      const form = {
        ...this.form.value,
        distributor_email: distributor ? distributor.email : ''
      };

      this.mouraService.store(form).subscribe(
        (res) => {
          setTimeout(() => {
            this.loading = false;

            this.successSwal.show();
          }, 1000);
        },
        (error) => {
          console.log(error);
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
