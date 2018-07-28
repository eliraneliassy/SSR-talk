import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL = 'https://api.fashbash.co/api/feed';
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(this.BASE_URL + '/user?userId=ScmFo3JxStXB6GZ62RKSB83LsoE3&page=0');
  }

  getProductById(id: string) {
    return this.http.get(this.BASE_URL + '/user?userId=ScmFo3JxStXB6GZ62RKSB83LsoE3&page=0')
      .pipe(
        map((res: any[]) => {
          return res.filter(x => x.fashbashId === id);
        }
        )
      );
  }
}
