import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  private apiUrl: string = 'http://official-joke-api.appspot.com/jokes/random';

  // Injecting dependency
  constructor(private http: HttpClient) {}

  getRandomJoke(): Observable<{ setup: string; punchline: string }> {
    return this.http.get<{ setup: string; punchline: string }>(this.apiUrl);
  }
}
