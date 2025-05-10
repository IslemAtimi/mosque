import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EncouragementCardDto } from 'app/models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncouragementService {

  constructor(private _httpClient: HttpClient){ }

  getEncouragementCards(id:string) : Observable<EncouragementCardDto[]>{
  return this._httpClient.get<EncouragementCardDto[]>('http://localhost:7171/encouragement/'+id);
  }
}
