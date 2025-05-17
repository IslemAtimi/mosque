import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnseignantDto } from 'app/models/models';
import { EnseignantService } from 'app/services/enseignant.service';
import { get } from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private service: EnseignantService,private router: Router) { }

  enseignants: EnseignantDto[] = []; 

  ngOnInit(): void {
    this.getEnseignant()
  }

  getEnseignant(): void {
    this.service.getEnseignants().subscribe(result => {
      this.enseignants = result;
    });
  }
  createEnseignant(): void {
    this.router.navigate(['/account/sign-up'], {
      state: { fromEnseignant: true }
    });
  }
  deleteEnseignant(id: string): void {
    // Logic to delete an enseignant by id
  }
  ViewEnseignant(id: string): void {
    // Logic to view enseignant details by id
  }


}
