import { Component, OnInit } from '@angular/core';
import { listNiches } from 'src/app/helpers/animations/animations.helper';
import { zip } from 'rxjs';
import { AclService } from 'ng2-acl';
import { DashBoardCard } from '../../../models';
import { SingularService } from '../../../services/entites/singular/singular.service';
import { AuthService } from 'src/app/modules/common/services/auth/auth.service';
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { UsersService } from '../../../services/entites/users/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [listNiches]
})
export class DashboardComponent implements OnInit {

  public cards: DashBoardCard[];
  public user: any;
  public rent = 0;
  public sales = 0;
  public balance = 0;
  public total = 84 + 14;
  public niches: any = 0;
  public expireds = 0;
  public brandSelected: any;

  constructor(
    private singularService: SingularService,
    private auth: AuthService,
    public acl: AclService,
    private userService: UsersService,
    private dashboardService: DashboardService
  ) { }


  public changeBrand($event): void {
    this.brandSelected = $event;
    this.loadDashBoardValues();

  }


  private initCards(): void {

    if (this.user.role !== 2) {
      this.cards = [
        {
          bg: 'bg-gradient-orange',
          material: true,
          title: 'Espaços', content: this.niches.toString(), icon: 'dashboard', footer: 'Mês atual', price: false
        },
        {
          bg: 'bg-gradient-danger',
          material: true,
          title: 'Contratos à vencer', content: this.expireds.toString(), icon: 'info_outline', footer: 'Vencem no mês atual', price: false
        },
        {
          bg: 'bg-gradient-purple',
          material: true,
          title: 'Aluguéis', content: this.rent.toString(), icon: 'attach_money', footer: 'Mês atual', price: true
        },
        {
          bg: 'bg-gradient-green',
          material: true,
          title: 'Vendas', content: this.sales.toString(), icon: 'store', footer: 'Mês atual', price: true
        },

      ];

    } else {
      this.cards = [
        {
          bg: 'bg-gradient-orange',
          material: true,
          title: 'Aluguel', content: this.rent.toString(), icon: 'attach_money', footer: 'Mês atual', price: true
        },
        {
          bg: 'bg-gradient-green',
          material: true,
          title: 'Vendas', content: this.sales.toString(), icon: 'shopping_cart', footer: 'Vencem no mês atual', price: true
        },
        {
          bg: 'bg-gradient-blue',
          material: true,
          title: 'Rendimento', content: this.balance.toString(), icon: null, footer: 'Mês atual', price: true
        }

      ];

    }
  }


  public loadDashBoardValues(): void {
    if (this.user && this.user.role === 2 && this.brandSelected) {

      zip(
        this.singularService.getDashboardRent(this.brandSelected),
        this.singularService.getDashboardSales(this.brandSelected),
        this.singularService.getSalesBalance(this.brandSelected)
      ).subscribe(
        (data) => {
          this.rent = data[0].data;
          this.sales = data[1].data;
          this.balance = data[2].data;

          this.initCards();
        },
        (error) => { }
      );

    } else {

      zip(
        this.dashboardService.getDashboardSales(),
        this.dashboardService.getDashboardNiches(),
        this.dashboardService.getExpireds(),
        this.dashboardService.getMonthRent()
      ).subscribe(
        (data) => {
          this.sales = data[0].data;
          this.niches = `${data[1].data}/${this.total}`;
          this.expireds = data[2].data;
          this.rent = data[3].data;
          this.initCards();
        },
        (error) => { }
      );

    }
  }


  ngOnInit() {
    this.userService.profile().subscribe(
      (user) => {
        this.user = user;

        if (this.user.role === 2) { this.brandSelected = this.user.contracts[0].brand.id; }

        this.loadDashBoardValues();

      },
      (error) => {

      }
    );
  }


}
