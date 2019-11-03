import { Component, OnInit } from '@angular/core';
import { listNiches } from 'src/app/helpers/animations/animations.helper';
import { Contract } from '../../../models';
import { ContractsService } from '../../../services/entites/contracts/contracts.service';
import { SingularService } from '../../../services/entites/singular/singular.service';
import { AuthService } from 'src/app/modules/common/services/auth/auth.service';


@Component({
  selector: 'app-niches-list',
  templateUrl: './niches-list.component.html',
  styleUrls: ['./niches-list.component.css'],
  animations: [listNiches]
})
export class NichesListComponent implements OnInit {

  public contracts: Contract[];
  private method: string;
  private service: string;
  private options: any;


  constructor(
    private contractsService: ContractsService,
    private singualrSerivice: SingularService,
    private auth: AuthService
  ) { }


  ngOnInit() {
    const user = this.auth.getDataUser();
    if (user.role === 2) {
      this.method = 'getContracts';
      this.service = 'singualrSerivice';

    } else {
      this.method = 'getData';
      this.service = 'contractsService';
      this.options = {status: 'active', pageSize: 999999999, orderBy: 'brand.name', sortedBy: 'asc'};

    }

    this[this.service][this.method](this.options).subscribe(
      (res) => {
        this.contracts = res.data;
      },
      (error) => {

      }
    );

  }

}
