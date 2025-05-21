import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

     constructor(private _httpClient: HttpClient){ }
  
    getPhoto(id:string): Observable<string>
        {
            return this._httpClient.get<string>('https://api.caspiran.fr/mosque/file/'+id+'/image');
        }
      }

