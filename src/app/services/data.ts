import { Injectable } from '@angular/core';
import { offer } from '../model/offer.model';
import { Observable, catchError, throwError, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Data {

  constructor(private http: HttpClient) { }

  getItems(searchText: string = ''): Observable<offer[]> {
    let params = new HttpParams();
    
    if (searchText) {
      params = params.set('q', searchText);
    }
    console.log('📡 Відправляю запит на сервер з параметрами:', params.toString());
    return this.http.get<offer[]>('offers', { params }).pipe(
      map((offers) => {
        if (!searchText) return offers;
        
        return offers.filter(item => 
          item.country.toLowerCase().includes(searchText.toLowerCase())
        );
      }),
      catchError(this.handleError)
    );
  }
  
  getOfferById(id: number | string): Observable<offer> {
    return this.http.get<offer>(`offers/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addOffer(newOffer: offer): Observable<offer> {
    return this.http.post<offer>('offers', newOffer).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('❌ Сталася помилка HTTP:', error);
    alert('Сталася помилка при з\'єднанні з сервером! Перевірте, чи запущено json-server.');
    return throwError(() => new Error('Server error'));
  }
}
