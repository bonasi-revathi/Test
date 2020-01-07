import { Injectable } from '@angular/core';
import { User } from './register/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  getUserById(id: number) {
    throw new Error("Method not implemented.");
  }
  url: string = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }


  createUser(userData: User) {
    console.log(userData);

    const registerUserPromise = new Promise( (resolve, reject) =>{
      this.http.post(this.url, userData)
            .toPromise()
            .then( ( res) => {
              console.log(res);
              resolve(res);
            })
            .catch( (err: User) => {
              console.log(err);
            })
            .finally( () => {
              console.log('Its Over');
            });
    } );

    return registerUserPromise;

  }

  getUsers(): Observable<User[]> {


    return this.http.get(this.url).
      pipe(map((resp: User[]) => {
        console.log(resp);
        return resp;
      }));

  }




}
