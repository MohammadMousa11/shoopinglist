import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { AddtocartComponent } from './shooping-list/addtocart/addtocart.component';
import { ProductsFactsComponent } from './shooping-list/products-facts/products-facts.component';
import {FormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoopingListComponent,
    AddtocartComponent,
    ProductsFactsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
