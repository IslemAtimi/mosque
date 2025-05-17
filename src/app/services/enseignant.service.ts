import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnseignantDto, RegisterInput, TokenResponse } from 'app/models/models';
import { get } from 'lodash';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private httpClient: HttpClient) { }

  
  getEnseignants(): Observable<EnseignantDto[]>
  {
      return this.httpClient.get<EnseignantDto[]>('http://localhost:7171/enseignent/lookup');
  }
  createEnseignant(data :RegisterInput): Observable<EnseignantDto>
  {const formData = new FormData();

    // Ajouter les champs simples
    formData.append('Nom', data.nom);
    formData.append('Prenom', data.prenom);
    formData.append('NomAr', data.nomAr);
    formData.append('PrenomAr', data.prenomAr);
    formData.append('DateNaissance', data.dateNaissance.toString());
    formData.append('Adresse', data.adress);
    formData.append('Telephone', data.telephone);
    formData.append('Username', data.username);
    formData.append('Password', data.password);
      return this.httpClient.post<EnseignantDto>('http://localhost:7171/enseignent',formData);
  }

  login(username: string, password: string): Observable<TokenResponse> {
    const params = new HttpParams()
      .set('userName', username)
      .set('password', password);

    return this.httpClient.get<TokenResponse>('http://localhost:7171/enseignent/login', { params });
  }
}
