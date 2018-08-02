import { isPlatformServer } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

import { ProductService } from './product.service';
import { tap } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolve implements Resolve<any> {

  constructor(private productService: ProductService,
    @Inject(PLATFORM_ID) private platformId,
    private transferState: TransferState) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const productId = route.params['id'];
    const key = makeStateKey<any>(productId);

    if (this.transferState.hasKey(key)) {
      const item = this.transferState.get<any>(key, null);
      this.transferState.remove(key);
      return of(item);
    } else {
      return this.productService.getProductById(productId)
        .pipe(
          tap(item => {
            if (isPlatformServer(this.platformId)) {
              this.transferState.set(key, item);
            }
          })
        );
    }

  }

}
