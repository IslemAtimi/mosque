import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateNiveauEtudeDto, NiveauEtudeDto } from 'app/models/models';
import { ReferencesService } from 'app/services/references.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private service:ReferencesService,
    private toastrService:ToastrService,
    private _matDialogRef: MatDialogRef<DetailsComponent>) { }

  Loading=false
  createNiveauEtude:CreateNiveauEtudeDto={
    label: '',
    labelAr: '',
    order: 1
  }

  ngOnInit(): void {
  }

  create(){
    this.service.createNiveauEtude(this.createNiveauEtude).subscribe({
      next: (result) => {
        this.afficherSucces()
        this._matDialogRef.close()
        
      },
      error: (error) => {
        this.afficherError()
      }
    })
  }
  afficherSucces() {
    this.toastrService.success('🎉 Niveau d\'étude a été créé avec succès !', 'Creation réussie', {
      timeOut: 3000,
      positionClass: 'toast-top-right'
    });
  }

  afficherError() {
    this.toastrService.error('Veuillez remplir tous les champs requis.', 'Erreur de Creation', {
      timeOut: 3000,
      positionClass: 'toast-top-right'
    });
  }
}
