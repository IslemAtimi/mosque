import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EtudiantDetailsDto, EtudiantsDto } from 'app/models/models';
import { EtudiantsService } from 'app/services/etudiants.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  etudiant:EtudiantDetailsDto
  constructor(
    private viewportScroller: ViewportScroller,
    private etdService:EtudiantsService
  ) { }

  ngOnInit(): void {
    this.getEtudiant('08dd85c1-f5f1-4910-8841-9a64739ecb1e');
  }

  mode:'default'|'info'|'quran'|'scolaire'|'absence'|'recompence'|'event'='default';

  changeMode(mode:'info'|'quran'|'scolaire'|'absence'|'recompence'|'event'):void{
    this.mode = mode;

  const element = document.getElementById(mode);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  }

  getEtudiant(id:string){
    this.etdService.getEtudiantDetailsById(id).subscribe((res)=>{
      this.etudiant=res
    })
  }





  subjects = [
    {
      name: 'الرياضيات',
      testScore: 13,
      examScore: 15,
      comment: 'جيد جداً، تحسن ملحوظ',
      examDate: new Date('2025-04-10'),
    },
    {
      name: 'اللغة العربية',
      testScore: 17,
      examScore: 18,
      comment: 'إبداع في التعبير',
      examDate: new Date('2025-04-12'),
    },
    {
      name: 'القرآن الكريم',
      testScore: 19,
      examScore: 20,
      comment: 'ممتاز في الحفظ',
      examDate: new Date('2025-04-15'),
    },
    {
      name: 'الفقه',
      testScore: 10,
      examScore: 12,
      comment: 'مستوى مقبول',
      examDate: new Date('2025-04-18'),
    },
    {
      name: 'العقيدة',
      testScore: 7,
      examScore: 9,
      comment: 'ضعيف، بحاجة لمراجعة',
      examDate: new Date('2025-04-20'),
    },
  ];
}
