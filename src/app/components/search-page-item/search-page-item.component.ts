import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page-item',
  templateUrl: './search-page-item.component.html',
  styleUrls: ['./search-page-item.component.scss']
})
export class SearchPageItemComponent implements OnInit {

  @Input() item;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProduct() {
    this.router.navigate(['/product', this.item.fashbashId]);
  }

}
