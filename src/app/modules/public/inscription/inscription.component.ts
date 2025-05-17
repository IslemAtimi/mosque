import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NiveauEtudeDto } from 'app/models/models';
import { EtudiantsService } from 'app/services/etudiants.service';
import { ReferencesService } from 'app/services/references.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private serviceEtd: EtudiantsService,
    private toastrService:ToastrService,
    private router:Router,
    private route:ActivatedRoute,
    private serviceRef:ReferencesService) 
    {
      route.params.subscribe(params => {
        this.etudiantId = params['id'];
        this.mode = this.etudiantId ? 'edit' : 'create';
      });
    }

  niveauEtudes:NiveauEtudeDto[]
  selectedNiveauId: number | null = null; 
  etudiantForm!: FormGroup;
  loading=false

  mode: 'create' | 'edit' = 'create';
  etudiantId: string | null = null;

  ngOnInit(): void {
    this.getNiveauEtudes()
    if (this.mode === 'edit') {
      this.serviceEtd.getEtudiantWithInscription(this.etudiantId).subscribe(etudiant => {
        this.createForm(etudiant);
      });
    } else {
      this.createForm(); // création
    }
  }

  getNiveauEtudes(){
    this.serviceRef.getNiveauEtudes().subscribe(result=>{
      this.niveauEtudes=result
    })
  }

  createForm(etudiant?: any) {
    this.etudiantForm = this.fb.group({
      nom: [etudiant?.nom || '', Validators.required],
      prenom: [etudiant?.prenom || '', Validators.required],
      nomAr: [etudiant?.nomAr || '', Validators.required],
      prenomAr: [etudiant?.prenomAr || '', Validators.required],
      dateNaissance: [etudiant?.dateNaissance || null, Validators.required],
      lieuNaissance: [etudiant?.lieuNaissance || '', Validators.required],
      dateInscription: [etudiant?.dateInscription || new Date()],
      photoUrl: [etudiant?.photoUrl || ''],
      niveauEtude: [etudiant?.niveauEtude || null, Validators.required],
      sexe: [etudiant?.sexe ?? 1, Validators.required],
      nomPere: [etudiant?.nomPere || ''],
      prenomPere: [etudiant?.prenomPere || '', Validators.required],
      nomArPere: [etudiant?.nomArPere || ''],
      prenomArPere: [etudiant?.prenomArPere || ''],
      adresse: [etudiant?.adresse || '', Validators.required],
      pereDecede: [etudiant?.pereDecede || false],
      relationWithLEtudiant: [etudiant?.relationWithLEtudiant || ''],
      telephone: [etudiant?.telephone || '', Validators.required],
      commentaire: [etudiant?.commentaire || ''],
      lastMosquee: [etudiant?.lastMosquee || ''],
      quran: [etudiant?.quran || ''],
      nomEnseignent: [etudiant?.nomEnseignent || ''],
      groupeSanguin: [etudiant?.groupeSanguin || ''],
      aDesAllergies: [etudiant?.aDesAllergies || false],
      detailsAllergies: [etudiant?.detailsAllergies || ''],
      aMaladiesChroniques: [etudiant?.aMaladiesChroniques || false],
      detailsMaladiesChroniques: [etudiant?.detailsMaladiesChroniques || ''],
      aSubiOperation: [etudiant?.aSubiOperation || false],
      detailsOperations: [etudiant?.detailsOperations || ''],
      codePin: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      remarques: [etudiant?.remarques || '']
    });
  }
  


  inscrit(){
    if (this.etudiantForm.get('pereDecede')?.value == false)
      { 
        this.etudiantForm.controls['nomPere']=this.etudiantForm.controls['nom'];
        this.etudiantForm.controls['nomArPere']=this.etudiantForm.controls['nomAr'];
        this.etudiantForm.controls['relationWithLEtudiant'].setValue("Pere");
      }
      if (this.etudiantForm.get('allergies')?.value == true)
      { 
        this.etudiantForm.controls['nomPere'].setValue("");
        
      }

      this.etudiantForm.controls['dateInscription'].setValue(this.etudiantForm.controls['dateNaissance'].value);
        
    if(this.etudiantForm.valid){
      this.loading=true
      this.serviceEtd.createEtudiantDetails(this.etudiantForm.value,this.file).subscribe(result=>{
        this.afficherSucces()
        this.loading=false
        this.router.navigate(['public',result.id])
      },error=>{
        this.afficherError()
        this.loading=false
      })
    }
    else this.afficheManqueInfos()
    
  }



  afficherSucces() {
    this.toastrService.success('🎉 تم إضافة الطالب بنجاح!', 'تمت العملية بنجاح', {
      timeOut: 5000,
      positionClass: 'toast-top-right'
    });
  }

  afficherError() {
    this.toastrService.error('حدث خطأ أثناء حفظ المعلومات. يرجى المحاولة مرة أخرى.', 'فشل في عملية الإدخال', {
      timeOut: 5000,
      positionClass: 'toast-top-right'
    });
  }

  afficheManqueInfos() {
    this.toastrService.error('يرجى ملء جميع المعلومات المطلوبة.', 'خطأ في عملية الإنشاء', {
      timeOut: 5000,
      positionClass: 'toast-top-right'
    });
  }


  photoPreview: string |ArrayBuffer | null = null;
  file:File | null = null;

  onPhotoTaken(event: Event) {
    this.file = (event.target as HTMLInputElement).files?.[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreview = reader.result;
      };
      reader.readAsDataURL(this.file);
    }
  }
  deletePhoto(){
    console.log(this.photoPreview)
    this.photoPreview = null;
    this.file= null;
  }
  

}
