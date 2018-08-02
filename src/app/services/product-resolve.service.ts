import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolve implements Resolve<any> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const productId = route.params['id'];
    return this.productService.getProductById(productId);
  }

}
