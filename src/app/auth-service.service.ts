import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  data:any;
  constructor(private http:HttpClient) { }

  login(data):Observable<any> {
    console.log("I am server")
    return this.http.get(`https://jsonplaceholder.typicode.com/users?email=${data.email}`,data);

  }
  getData():Observable<Object>{
     const userss=JSON.parse(localStorage.getItem('user')|| '{}');
     console.log(userss)
    let url=  `https://jsonplaceholder.typicode.com/posts?userId=${userss}`;
    return this.http.get(url);
  }
  getOtherPosts():any{
    const userss=JSON.parse(localStorage.getItem('user')|| '{}');
    console.log(userss)
   let url=  `https://jsonplaceholder.typicode.com/posts`;
   return this.http.get(url);
 }
 create(data): Observable<any> {
  return this.http.post(`https://jsonplaceholder.typicode.com/users`, data);
}

getAllUserData(): Observable<any> {
  return this.http.get(`https://jsonplaceholder.typicode.com/users`);
}

// get isLoggedIn(): boolean {
//  const email=JSON.parse(localStorage.getItem('email')|| '{}');
//  return (email !== null !== false) ? true : false;
//}

}
