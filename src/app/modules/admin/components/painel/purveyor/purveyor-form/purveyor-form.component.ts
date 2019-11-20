import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {UsersService} from '../../../../services/entites/users/users.service';


@Component({
  selector: 'app-purveyor-form',
  templateUrl: './purveyor-form.component.html',
  styleUrls: ['./purveyor-form.component.css']
})
export class PurveyorFormComponent implements OnInit {

  public edit = new Subject<any>();
  public lastUser = new Subject<any>();
  public lastBrand = new Subject<any>();
  public form: FormGroup;
  public mode: string;
  public editDataUser: any = null;


  constructor(
    private usersService: UsersService,
    private actived: ActivatedRoute,
    private router: Router) {

  }

  public setLastUser($event) {
    this.lastUser.next($event);
  }


  public setLastBrand($event) {
    this.lastBrand.next($event);
  }


  public doneStore($event) {
    this.router.navigate(['/painel/fornecedores']);
  }


  ngOnInit() {
    this.mode = this.actived.snapshot.data['mode'];


    if (this.mode === 'edit') {
      const id = this.actived.snapshot.params['id'];

      this.usersService.get(id).subscribe(
        (user) => {
          this.editDataUser = user.data;
          this.edit.next(this.editDataUser);
        },
        (err) => {
          console.log('err', err);

        }
      );

    }


  }


}
