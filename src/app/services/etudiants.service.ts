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
          return this._httpClient.get<Pagedresult<EtudiantsDto[]>>('https://api.caspiran.fr/mosque/etudiants');
      }

      searchEtudiants(filter: string):Observable<Pagedresult<EtudiantsDto[]>>
    {
        const params = new HttpParams().set('Filter', filter);
        return this._httpClient.get<Pagedresult<EtudiantsDto[]>>('https://api.caspiran.fr/mosque/etudiants', {
            params
        });
    }

    getEtudiantById(id:string): Observable<EtudiantsDto>
      {
          return this._httpClient.get<EtudiantsDto>('https://api.caspiran.fr/mosque/etudiants/'+id);
      }

      getEtudiantDetailsById(id:string): Observable<EtudiantDetailsDto>
      {
          return this._httpClient.get<EtudiantDetailsDto>('https://api.caspiran.fr/mosque/etudiants/details/'+id);
      }

      deleteEtudiant(id:string){
        const params = new HttpParams().set('id', id);
        return this._httpClient.delete('https://api.caspiran.fr/mosque/etudiants',{params});
      }

      createEtudiantDetails(data: InscriptionDto,photo?:File) {
        const formData = new FormData();

    // Ajouter les champs simples
    formData.append('Nom', data.nom);
    formData.append('Prenom', data.prenom);
    formData.append('NomAr', data.nomAr);
    formData.append('PrenomAr', data.prenomAr);
    formData.append('DateNaissance', data.dateNaissance.toString());
    formData.append('LieuNaissance', data.lieuNaissance);
    formData.append('DateInscription', data.dateInscription.toString());
    formData.append('Sexe', data.sexe.toString());

    formData.append('NomPere', data.nomPere);
    formData.append('PrenomPere', data.prenomPere);
    formData.append('NomArPere', data.nomArPere);
    formData.append('PrenomArPere', data.prenomArPere);
    formData.append('Adresse', data.adresse);
    formData.append('PereDecede', String(data.pereDecede));
    formData.append('RelationWithLEtudiant', data.relationWithLEtudiant);
    formData.append('Telephone', data.telephone);
    formData.append('Commentaire', data.commentaire);
    formData.append('LastMosquee', data.lastMosquee);
    formData.append('Quran', data.quran);
    formData.append('NomEnseignent', data.nomEnseignent);
    formData.append('GroupeSanguin', data.groupeSanguin);

    formData.append('ADesAllergies', String(data.aDesAllergies));
    formData.append('DetailsAllergies', data.detailsAllergies);
    formData.append('AMaladiesChroniques', String(data.aMaladiesChroniques));
    formData.append('DetailsMaladiesChroniques', data.detailsMaladiesChroniques);
    formData.append('ASubiOperation', String(data.aSubiOperation));
    formData.append('DetailsOperations', data.detailsOperations);

    formData.append('NiveauEtude', data.niveauEtude.toString());
    formData.append('CodePin', data.codePin);
    formData.append('Remarques', data.remarques);

    if(photo!=null )formData.append('file', photo);
    
        return this._httpClient.post<EtudiantsDto>('https://api.caspiran.fr/mosque/etudiants/inscription', formData);
      }

      getEtudiantWithInscription(id:string): Observable<InscriptionDto> {
        return this._httpClient.get<InscriptionDto>('https://api.caspiran.fr/mosque/etudiants/inscription'+id);
      }
    }

