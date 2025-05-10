import { Component, Input, OnInit } from '@angular/core';
import { EncouragementCardDto } from 'app/models/models';
import { EncouragementService } from 'app/services/encouragement.service';

@Component({
  selector: 'app-encouragement-cards',
  templateUrl: './encouragement-cards.component.html',
  styleUrls: ['./encouragement-cards.component.scss']
})
export class EncouragementCardsComponent implements OnInit {

  
  @Input() studentId!: string;

  studentCards: EncouragementCardDto[] = [];

  constructor(private service: EncouragementService) {}

  

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards() {
    this.service.getEncouragementCards(this.studentId).subscribe(cards => {
        this.studentCards = cards;
      });
  }

  get availableCards() {
    return this.studentCards.filter(c => !c.isConsumed);
  }

  consumeCards(count: number) {
    const today = new Date().toISOString().split('T')[0];
    const cardsToConsume = this.availableCards.slice(0, count);

    cardsToConsume.forEach(c => {
      c.isConsumed = true;
      c.dateConsumed = today;
    });

}
}
