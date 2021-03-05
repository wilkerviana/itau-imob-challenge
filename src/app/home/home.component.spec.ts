import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ImoveisService } from '../shared/services/imoveis/imoveis.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: ImoveisService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [ImoveisService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ImoveisService);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should filter properties', () => {
    component.query.setValue('Vila');
    component.query.updateValueAndValidity();
    fixture.detectChanges();

    expect(component.query.value).toBe('Vila');
  });
});
