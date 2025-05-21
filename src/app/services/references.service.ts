import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateNiveauEtudeDto, NiveauEtudeDto, Pagedresult } from 'app/models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  constructor(private _httpClient: HttpClient){ }
  
    getNiveauEtudes(): Observable<NiveauEtudeDto[]>
        {
            return this._httpClient.get<NiveauEtudeDto[]>('https://api.caspiran.fr/mosque/niveau-etude');
        }

        createNiveauEtude(input: CreateNiveauEtudeDto): Observable<NiveauEtudeDto> {
          const params = new HttpParams()
            .set('label', input.label)
            .set('labelAr', input.labelAr)
            .set('order', input.order.toString());
        
          return this._httpClient.post<NiveauEtudeDto>('https://api.caspiran.fr/mosque/niveau-etude', null, { params });
        }

        deleteNiveauEtude(id: number): Observable<void> {
          return this._httpClient.delete<void>('https://api.caspiran.fr/mosque/niveau-etude/' + id);
        }
}
