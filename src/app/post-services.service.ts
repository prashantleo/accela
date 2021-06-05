import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {

  constructor(private http:HttpClient) { }
  getData():Observable<Object>{
    let url="https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }
}
