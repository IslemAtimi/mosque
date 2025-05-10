import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EtudiantDetailsDto, EtudiantsDto, InscriptionDto, Pagedresult } from 'app/models/models';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

   constructor(private _httpClient: HttpClient){ }

  getEtudiants(): Observable<Pagedresult<EtudiantsDto[]>>
      {
          return this._httpClient.get<Pagedresult<EtudiantsDto[]>>('http://localhost:7171/etudiants');
      }

      searchEtudiants(filter: string):Observable<Pagedresult<EtudiantsDto[]>>
    {
        const params = new HttpParams().set('Filter', filter);
        return this._httpClient.get<Pagedresult<EtudiantsDto[]>>('http://localhost:7171/etudiants', {
            params
        });
    }

    getEtudiantById(id:string): Observable<EtudiantsDto>
      {
          return this._httpClient.get<EtudiantsDto>('http://localhost:7171/etudiants/'+id);
      }

      getEtudiantDetailsById(id:string): Observable<EtudiantDetailsDto>
      {
          return this._httpClient.get<EtudiantDetailsDto>('http://localhost:7171/etudiants/details/'+id);
      }

      deleteEtudiant(id:string){
        const params = new HttpParams().set('id', id);
        return this._httpClient.delete('http://localhost:7171/etudiants',{params});
      }

      createEtudiantDetails(input: InscriptionDto): Observable<EtudiantsDto> {
        return this._httpClient.post<EtudiantsDto>('http://localhost:7171/etudiants/inscription', input);
      }

      getEtudiantWithInscription(id:string): Observable<InscriptionDto> {
        return this._httpClient.get<InscriptionDto>('http://localhost:7171/etudiants/inscription'+id);
      }
    }

