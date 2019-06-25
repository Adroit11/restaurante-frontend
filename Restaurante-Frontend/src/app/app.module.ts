import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { NewOrderComponent } from './components/restaurant/order/new-order/new-order/new-order.component';
import { ListOrderComponent } from './components/restaurant/order/list-order/list-order/list-order.component';
import { NewProductComponent } from './components/restaurant/product/new-product/new-product/new-product.component';
import { ListProductComponent } from './components/restaurant/product/list-product/list-product/list-product.component';
import { NewWaiterComponent } from './components/restaurant/employee/new-waiter/new-waiter/new-waiter.component';
import { ListWaiterComponent } from './components/restaurant/employee/list-waiter/list-waiter/list-waiter.component';
import { NewTableComponent } from './components/restaurant/table/new-table/new-table/new-table.component';
import { ListTableComponent } from './components/restaurant/table/list-table/list-table/list-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    NewOrderComponent,
    ListOrderComponent,
    NewProductComponent,
    ListProductComponent,
    NewWaiterComponent,
    ListWaiterComponent,
    NewTableComponent,
    ListTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
