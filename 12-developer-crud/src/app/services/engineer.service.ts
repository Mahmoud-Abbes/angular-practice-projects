import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateEngineerDTO, SoftwareEngineer } from '../models/software-engineer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EngineerService {
  private apiUrl: string = 'http://localhost:8080/api/software-engineers';

  constructor(private http: HttpClient) {}

  getAllEngineers(): Observable<SoftwareEngineer[]> {
    return this.http.get<SoftwareEngineer[]>(this.apiUrl);
  }

  editEngineer(editedEngineer: SoftwareEngineer): Observable<void>{
    return this.http.put<void>(this.apiUrl, editedEngineer);
  }

  deleteEngineer(deletedId: Number): Observable<void>{
    return this.http.delete<void>(this.apiUrl+ "/" + deletedId);
  }

  addEngineer(newEngineer: CreateEngineerDTO): Observable<SoftwareEngineer>{
    return this.http.post<SoftwareEngineer>(this.apiUrl, newEngineer);
  }
  
}
