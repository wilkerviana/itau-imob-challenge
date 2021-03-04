import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardDefaultComponent } from './card-default.component';

@NgModule({
  imports: [CommonModule],
  exports: [CardDefaultComponent],
  declarations: [CardDefaultComponent],
})
export class CardDefaultModule {}
