import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'imob-card-default',
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.scss'],
})
export class CardDefaultComponent implements OnInit {
  @Input() index: number;
  @Input() data: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getDetails(id) {
    this.router.navigate(['/imoveis', id]);
  }
}
