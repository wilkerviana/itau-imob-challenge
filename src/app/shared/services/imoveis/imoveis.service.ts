import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Properties } from '../../interfaces/property.interface';

@Injectable({
  providedIn: 'root',
})
export class ImoveisService {
  url = 'http://localhost:3000/data';

  constructor(private http: HttpClient) {}

  getProperties(): Observable<Properties[]> {
    return this.http.get<Properties[]>(this.url);
  }

  getFilteredProperties(query: string): Observable<Properties[]> {
    return this.http
      .get<Properties[]>(this.url)
      .pipe(
        map((properties) =>
          properties.filter(
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
