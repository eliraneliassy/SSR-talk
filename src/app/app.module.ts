import { SsrRenderDirective } from './directives/ssr-render.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { SearchPageItemComponent } from './components/search-page-item/search-page-item.component';
import { SsrNoRenderDirective } from './directives/ssr-no-render.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPageComponent,
    ProductPageComponent,
    SearchPageItemComponent,
    SsrNoRenderDirective,
    SsrRenderDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
