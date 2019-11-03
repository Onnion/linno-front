import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudServices } from 'src/app/helpers/crud/crud-services.helpers';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends CrudServices {
  protected entity = 'user';


  constructor(public http: HttpClient) {
    super();
  }


  /**
   *
   * @param cep (string)
   */
  public cepSearch (cep: string): Observable<any> {
    // return this.http.get(`${environment.AUTH_URL}/api/${this.entity}/cep/${cep}`)
    return this.http.get(`${environment.AUTH_URL}/api/cep/${cep}`);
  }


  /**
   *
   * @param cpf_cnpj (string)
   */
  public verifyCpfCnpj (cpf_cnpj: string): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}/api/${this.entity}/verify-register/${cpf_cnpj}`);
  }


  /**
   *
   * @param email (string)
   */
  public verifyEmail (email: string): Observable<any> {
    return this.http.get(`${environment.AUTH_URL}/api/${this.entity}/verify-email/${email}`);
  }


  /**
   *
   * @param id (number)
   * @param status (number)
   */
  public updateStatus(id: number, status: number): Observable<any> {
    return this.http.put(`${environment.AUTH_URL}/api/${this.entity}/${id}/change-status`, {status});
  }


  public profile() {
    return new Observable((observer) => {
      this.http.get(`${environment.AUTH_URL}/api/${this.entity}/profile`).subscribe(
        // CREATE MODEL
        (profile: any) => {
          observer.next(profile.data);
        }
      );
    });
  }

}
