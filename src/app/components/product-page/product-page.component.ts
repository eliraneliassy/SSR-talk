import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Title, Meta } from '@angular/platform-browser';

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
    private productService: ProductService,
    private title: Title,
    private meta: Meta) { }

  ngOnInit() {
    this.paramsSubscription = this.route.data.subscribe((data: any) => {
      this.item = data['data'][0];
      this.title.setTitle(this.item.description);
      this.meta.addTag({
        name: 'description',
        content: this.item.description
      });

      const twitterTags = [];
      twitterTags.push({ name: 'twitter:card', content: 'summary' });
      twitterTags.push({ name: 'twitter:site', content: '@EliranEliassy' });
      twitterTags.push({ name: 'twitter:title', content: this.item.description });
      twitterTags.push({ name: 'twitter:description', content: this.item.description });
      twitterTags.push({ name: 'twitter:text:description', content: this.item.description });
      twitterTags.push({ name: 'twitter:image', content: this.item.imageUrl });

      this.meta.addTags(twitterTags);

      const fbTags = [];
      fbTags.push({ name: 'og:title', content: this.item.description });
      fbTags.push({ name: 'og:image', content: this.item.imageUrl });
      fbTags.push({ name: 'og:site_name', content: 'Fake MarketPlace' });
      fbTags.push({ name: 'og:description', content: this.item.description });

      this.meta.addTags(fbTags);

    });


  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
