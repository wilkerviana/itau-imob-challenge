import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Properties } from '../shared/interfaces/property.interface';
import { ImoveisService } from '../shared/services/imoveis/imoveis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  query = new FormControl();
  properties$: Observable<Properties[]>;

  constructor(private imoveisService: ImoveisService) {}

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties(): void {
    this.properties$ = this.query.valueChanges.pipe(
      startWith(''),
      map((query: string) => query.trim()),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query) => this.imoveisService.getProperties(query))
    );
  }
}
