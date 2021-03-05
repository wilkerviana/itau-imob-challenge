import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CardDefaultComponent } from './card-default.component';

describe('CardDefaultComponent', () => {
  let component: CardDefaultComponent;
  let fixture: ComponentFixture<CardDefaultComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDefaultComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(CardDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to path imoveis/1', () => {
    const spy = spyOn(router, 'navigate');
    component.getDetails(1);
    expect(spy).toHaveBeenCalledWith(['/imoveis', 1]);
  });
});
