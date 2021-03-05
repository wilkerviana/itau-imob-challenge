import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Properties } from '../../interfaces/property.interface';

@Injectable({
  providedIn: 'root',
})
export class ImoveisService {
  url = 'http://localhost:3000/data';

  constructor(private http: HttpClient) {}

  getProperties(query?: string): Observable<Properties[]> {
    return this.http
      .get<Properties[]>(this.url)
      .pipe(
        map((properties) =>
          properties
            .map((p, i) => (p = { ...p, id: i }))
            .filter(
              (property) =>
                property.neighborhood.includes(query) ||
                property.city.includes(query)
            )
        )
      );
  }

  getPropertyDetails(id: number): Observable<Properties> {
    return this.http
      .get<Properties[]>(this.url)
      .pipe(
        map((properties) =>
          properties.find((prop) => properties.indexOf(prop) === id)
        )
      );
  }
}
