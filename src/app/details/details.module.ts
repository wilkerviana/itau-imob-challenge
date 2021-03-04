import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';

@NgModule({
  imports: [CommonModule, RouterModule, DetailsRoutingModule],
  declarations: [DetailsComponent],
})
export class DetailsModule {}
