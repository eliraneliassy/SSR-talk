import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductResolve } from './services/product-resolve.service';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'product/:id', component: ProductPageComponent, resolve: {data: ProductResolve} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
