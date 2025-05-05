import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NiveauEtudeDto, Pagedresult } from 'app/models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  constructor(private _httpClient: HttpClient){ }
  
    getNiveauEtudes(): Observable<NiveauEtudeDto[]>
        {
            return this._httpClient.get<NiveauEtudeDto[]>('http://localhost:7171/niveau-etude');
        }
}
