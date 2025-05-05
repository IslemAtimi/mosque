import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NiveauEtudeDto } from 'app/models/models';
import { ReferencesService } from 'app/services/references.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  niveauEtudes:NiveauEtudeDto[]
  constructor(private service:ReferencesService,private _matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getNiveauEtudes()
  }

  getNiveauEtudes(){
    this.service.getNiveauEtudes().subscribe(result=>{
      this.niveauEtudes=result
    })
  }

  goToNiveauEtude(niveauEtude:NiveauEtudeDto){
    localStorage.setItem('niveauEtude',JSON.stringify(niveauEtude))
  }
  createNiveauEtude(): void
    {
        this._matDialog.open(DetailsComponent, {
            autoFocus: false,
            data     : {
                note: {}
            }
        });
    }
}
