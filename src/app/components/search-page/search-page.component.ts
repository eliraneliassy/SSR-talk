import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  items: any[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getItems().subscribe((res: any[]) => {
      this.items = res;
    });
  }

}
