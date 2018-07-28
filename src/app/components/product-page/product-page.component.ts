import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnDestroy {

  productId: string;
  item: any;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.productService.getProductById(this.productId)
        .subscribe((res) => {
          this.item = res[0];
        });
    });

  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
