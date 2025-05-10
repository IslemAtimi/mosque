import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NiveauEtudeDto } from 'app/models/models';
import { ReferencesService } from 'app/services/references.service';
import { DetailsComponent } from '../details/details.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  niveauEtudes:NiveauEtudeDto[]
  constructor(private service:ReferencesService,
    private toastrService:ToastrService,
    private _matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getNiveauEtudes()
  }

  getNiveauEtudes(){
    this.service.getNiveauEtudes().subscribe(result=>{
      this.niveauEtudes=result
    })
  }

  
  createNiveauEtude(): void {
    const dialogRef = this._matDialog.open(DetailsComponent, {
      autoFocus: false,
      data: {
        
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      
        this.getNiveauEtudes(); 
      
    });
  }

  removeNiveauEtude(id:number){
    var value=confirm('هل أنت متأكد من حذف هذه الدراسة؟ لا يمكن التراجع عن هذا الإجراء!')
    if(value==true){
      this.service.deleteNiveauEtude(id).subscribe(result=>{
        this.getNiveauEtudes()
      })
    }
  }

      
    
}
