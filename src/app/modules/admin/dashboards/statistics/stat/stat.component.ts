import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  constructor() { }

  stats=[
    {
      id:1,
      title:'Etudiants',
      value:'2000',
      subtitle:'Etudiants inscrits'
    },
    {
      id:2,
      title:'Matiers',
      value:'10',
      subtitle:'Matiers Etudiés'
    },
    {
      id:3,
      title:'Niveaux Etude',
      value:'18',
      subtitle:'Niveau d\'Etude'
    },
    {
      id:4,
      title:'Professeurs',
      value:'22',
      subtitle:'Professeur'
    }
  ]

  ngOnInit(): void {
  }



}
