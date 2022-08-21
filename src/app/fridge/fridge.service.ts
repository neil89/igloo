import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const unsplashSearchPhotosAPI = 'https://api.unsplash.com/search/photos';

@Injectable({
  providedIn: 'root'
})

export class FridgeService {

  constructor(
    private http: HttpClient
  ) { }

  getProductStuffImages(keyword: string): Observable<any> {
    const url = `${this.getUnsplashURLWithClientId()}&query=${keyword}`;

    return this.http.get<any>(url)
      .pipe(
        tap(data =>
          console.log('getProductStuff: ' +
          JSON.stringify(data))
        )
      );
  }

  private getUnsplashURLWithClientId(): string {
    return `${unsplashSearchPhotosAPI}?client_id=${environment.unsplashAccess}`;
  }
}

