import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  adviceNro!: string;
  advice!: string;
  private subscription!: Subscription;

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.getMessage();
  }

  getMessage() {
    this.subscription = this.cardService.get().subscribe((ret) => {
      this.advice = ret.advice;
      this.adviceNro = ret.id;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
