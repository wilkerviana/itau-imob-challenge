import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Properties } from '../../interfaces/property.interface';

@Component({
  selector: 'imob-card-default',
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.scss'],
})
export class CardDefaultComponent implements OnInit {
  @Input() data: Properties;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getDetails(id: number) {
    this.router.navigate(['/imoveis', this.data.id]);
  }
}
