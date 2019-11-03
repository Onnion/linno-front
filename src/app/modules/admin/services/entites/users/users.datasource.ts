import {DataSource} from '@angular/cdk/collections';
import {Observable, of} from 'rxjs';
import {UsersService} from './users.service';

// import {ServersService} from '../services/servers/servers.service';

export class UsersDataSource extends DataSource<any> {
  constructor(private _userService: UsersService[]) {
    super();
  }

  connect(): Observable<any> {
    return of(this._userService);
  }

  disconnect() {
  }
}
