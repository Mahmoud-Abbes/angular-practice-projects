import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly API_URL: string = "https://jsonplaceholder.typicode.com/posts"; 

  constructor(private http: HttpClient){}

  getPosts(page: number, limit: number): Observable<any[]>{
    return this.http.get<any[]>(`${this.API_URL}?_pages=${page}&_limit=${limit}`);
  }
}
