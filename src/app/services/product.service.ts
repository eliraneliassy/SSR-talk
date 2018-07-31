import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL = 'https://ssr-talk.firebaseio.com/items.json';
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(this.BASE_URL);
  }

  getProductById(id: string) {
    return this.http.get(this.BASE_URL)
      .pipe(
        map((res: any[]) => {
          return res.filter(x => x.fashbashId === id);
        }
        )
      );
  }
}
