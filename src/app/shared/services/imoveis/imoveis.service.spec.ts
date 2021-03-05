import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ImoveisService } from './imoveis.service';

describe('ImoveisService', () => {
  let service: ImoveisService;
  let httpMock: HttpTestingController;
  const url = 'http://localhost:3000/data';
  const propertiesMock = [
    {
      bedrooms: 1,
      parkingSlots: 0,
      bathrooms: 1,
      rentValue: 1200,
      acceptPets: true,
      address: 'Rua Alves Ribeiro',
      number: '110',
      neighborhood: 'Cambuci',
      city: 'São Paulo',
      condominiumValue: 400,
      floor: 12,
      forRent: true,
      forSale: false,
      hasElevator: false,
      image:
        'https://www.quintoandar.com.br/img/lrg/893253414-631.1697099916167foto2.jpg',
      lat: -23.6351351,
      lng: -46.5758505,
      suites: 0,
      title: 'Apartamento para alugar com 1 quarto, 69m²',
      totalArea: 69,
      totalCost: 1600,
      type: 'Apartamento',
    },
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ImoveisService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('ImoveisService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProperties should get list as expected', () => {
    service.getProperties().subscribe((response) => {
      expect(response).toEqual(propertiesMock);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(propertiesMock);
  });

  // it('getPropertyDetails should get item details as expected', () => {
  //   const [detailsMock] = propertiesMock;

  //   service.getPropertyDetails(0).subscribe((response) => {
  //     expect(response).toEqual(detailsMock);
  //   });

  //   const req = httpMock.expectOne(url);
  //   expect(req.request.method).toBe('GET');
  //   req.flush(detailsMock);
  // });
});
