import { Component, OnInit } from '@angular/core';
import { showup, listNiches, listObjShowup } from 'src/app/helpers/animations/animations.helper';
import { AclService } from 'ng2-acl';
import { ListComponent } from 'src/app/helpers/list-component/list-component.component';
import { ProductsService } from '../../../services/entites/products/products.service';
import { UsersService } from '../../../services/entites/users/users.service';
import { SingularService } from '../../../services/entites/singular/singular.service';
import { ContractsService } from '../../../services/entites/contracts/contracts.service';

@Component({
  selector: 'app-purveyor-niches-list',
  templateUrl: './purveyor-niches-list.component.html',
  styleUrls: ['./purveyor-niches-list.component.css'],
  animations: [showup, listNiches, listObjShowup]
})
export class PurveyorNichesListComponent extends ListComponent implements OnInit {

  // CREAT MODEL
  public cards: any[];
  public user: any;
  public contract: any;
  public brandSelected: any;
  public showProductDetail = false;
  public detail: any;

  constructor(
    private productsService: ProductsService,
    private authService: UsersService,
    private singularService: SingularService,
    private contractsService: ContractsService,
    public acl: AclService,

  ) {
    super();
  }


  private initConfigs(): void {
    this.service = this.productsService;
    this.methodLoad = 'getData';

    this.authService.profile().subscribe(
      (user: any) => {
        this.user = user;
        this.changeBrand(user.contracts[0].brand.id);
      },
      (error) => {
      }
    );
  }


  public getImage(brand) {
    return 'getImage(brand);'
  }


  public actions($event): void {
    const target = $event.target;
    const tag = target.tagName;
    let parent = target.parentNode;

    if (tag === 'I') {
      parent = parent.parentNode;
    }

    parent.children[1].classList.toggle('show');

  }


  public openProductDetail(product: any): void {
    this.singularService.producDetail(product.id).subscribe(
      (detail: any) => {
        this.showProductDetail = true;
        this.detail = detail;

      },
      (error) => { }
    );
  }

  public close($event): void {
    this.showProductDetail = false;
  }


  public changeBrand($event): void {
    this.brandSelected = $event;
    this.options = { brand_id: this.brandSelected };
    const contract = this.user.contracts.filter(($contract) => $contract.brand.id === this.brandSelected)[0];
    this.contractsService.get(contract.id).subscribe(
      (_contract: any) => {
        this.contract = _contract.data;
        this.initCards();

      },
      (error) => {

      }
    );
    this.loadData();

  }


  private initCards(): void {
    this.cards = [
      {
        bg: 'bg-gradient-gray',
        material: true,
        title: 'Nicho', content: this.contract.niche.description, icon: false, footer: '', price: false
      },
      {
        bg: 'bg-gradient-orange',
        material: true,
        title: 'Aluguel', content: this.contract.value, icon: 'attach_money', footer: '', price: true
      },
      {
        bg: 'bg-gradient-primary',
        material: true, date: true,
        title: 'Início do Contrato', content: this.contract.begin_contract, icon: 'date_range', footer: '', price: false
      },
      {
        bg: 'bg-gradient-danger',
        material: true, date: true,
        title: 'Final do Contrato', content: this.contract.end_contract, icon: 'date_range', footer: '', price: false
      },
      {
        bg: 'bg-gradient-green',
        material: true,
        title: 'Vendas', content: this.contract.sales, icon: 'shopping_cart', footer: '', price: true
      },
    ];
  }


  ngOnInit() {
    this.initConfigs();
  }

}
