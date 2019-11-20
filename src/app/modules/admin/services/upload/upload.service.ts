import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class UploadService {
  protected entity = 'brand';

  constructor(public http: HttpClient) {
  }

  public upload(file: File): Observable<any> {
    // const url = `https://mylead2-api.herokuapp.com/api/upload?id=${1}`;
    // const url = `https://gateway.buscaaereo.com.br/api/ops/bank-transfer/upload`;

    const formData = new FormData();

    formData.append('file', file, file.name);

    return new Observable( (observer) => {
      [1, 2, 3, 4].forEach(element => {
        observer.next('a');

        if (element === 4) {
          observer.next('final');
        }
      });
    });

    // return this.http.post(url, formData, {
    //   reportProgress: true,
    //   observe: 'events',
    //   headers: {
    //     'content-type':  'multipart/form-data; boundary=----WebKitFormBoundaryDW0H7zZu3czVFJfn',
    //     'accept': '*/*',
    //     'accept-encoding': 'gzip, deflate, br',
    //     'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJmYzY4ODFiYzE5NGY5MTEzZTlmNTkzMDVlYzI5ZDdiZjEyYzBhZTIxMzY1Mjc4ZTFiMTJlZTMxOTYxNTgzYTY2NGQ2NzExYTI1YmM0YzI2In0.eyJhdWQiOiIxNiIsImp0aSI6IjJmYzY4ODFiYzE5NGY5MTEzZTlmNTkzMDVlYzI5ZDdiZjEyYzBhZTIxMzY1Mjc4ZTFiMTJlZTMxOTYxNTgzYTY2NGQ2NzExYTI1YmM0YzI2IiwiaWF0IjoxNTQ0MzI1MjU2LCJuYmYiOjE1NDQzMjUyNTYsImV4cCI6MTU0NDM1NDA1Niwic3ViIjoiNDEzOSIsInNjb3BlcyI6W119.Ae4j8U888g39Zi3JMs0-wU7XGtJpxNxzGNJzRZ1BkJeAxSKmfbn7tOZuP01JWaDwDAZq2JfENe9DYt-z_5XPR3SZrNljoMWaWSeaf1MlJ67Kltg1ws7oEnBvLpuDHKnWc-LgVAbCQ7u3y8X5L7E3ciY-VMWOXBi0Gp6XB44TKhBp38DW6EBeRna8HKkAlN3X_jhYn8eSI46N6l3gbNuFxucfPDYnR38fwKrmuOq6dIq2CQbpXckRgl_fu3OyBcnhwY6GCn48JTwlVK893OUFSnd62YV9Wrfr5aRWOGMVyTazVnCbwci1culgenB0W7XvRCvYxGP0KlmLRlUrXL2sKVXVhrFr7F7J0sVWEia1nTrysV5u-441LuD7hmCKzI70f11iwKdbRRZ2Zfo6YcH7ok0pmd_MyoxUx-9PKl2HWCFaJEyc1UGYGamJpDxQ8ESv9MEnRnGuYdohI7FHTH8havnLws90kZBqVMDxS7vVK6KlqOBOAfWoCgDrIT8IzpsVzbyN4chFwqWX0uL5yymbNbfsyrPUdZYap4PTUBHIBL8UEg2DnLm_hFkadqi85qRDt6iIXSoNwzl_GA6E5DOgRsAfJBOtVyLbKlli0oQZWwekoBXccdaG4aB2PHRjb93diNRDP8yWwqKtPcZ_4nKiyigqN97R--UBoL1pduBkOD8'
    //   }
    // });
  }
}
