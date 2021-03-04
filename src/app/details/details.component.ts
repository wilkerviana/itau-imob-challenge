import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Properties } from '../shared/interfaces/property.interface';
import { ImoveisService } from '../shared/services/imoveis/imoveis.service';

interface PropertiesRules {
  acceptPets: boolean;
  hasElevator: boolean;
  floor: number;
  suites: number;
  bedrooms: number;
  bathrooms: number;
  parkingSlots: number;
  totalArea: number;
}

@Component({
  selector: 'imob-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  property$: Observable<Properties>;
  rules = <PropertiesRules>{};

  constructor(
    private activatedRoute: ActivatedRoute,
    private imoveisService: ImoveisService
  ) {}

  ngOnInit(): void {
    const idProperty = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.property$ = this.imoveisService.getPropertyDetails(idProperty).pipe(
      tap((res: Properties) => {
        const {
          acceptPets,
          hasElevator,
          floor,
          suites,
          bedrooms,
          bathrooms,
          parkingSlots,
          totalArea,
        } = res;
        this.rules = {
          acceptPets,
          hasElevator,
          floor,
          suites,
          bedrooms,
          bathrooms,
          parkingSlots,
          totalArea,
        };
      })
    );
  }
}
