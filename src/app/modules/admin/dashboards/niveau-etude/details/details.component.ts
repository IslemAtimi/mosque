import { Component, OnInit } from '@angular/core';
import { NiveauEtudeDto } from 'app/models/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  niveauEtude:NiveauEtudeDto={
    id:0,
    label:'',
    labelAr:'',
    order:0
  }

  ngOnInit(): void {
  }

}
