import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RestauranteComponent } from './components/restaurante/restaurante.component';
import { ListaPedidoComponent } from './components/restaurante/lista-pedido/lista-pedido.component';
import { PedidoComponent } from './components/restaurante/pedido/pedido.component';

import { RestauranteService } from './shared/restaurante.service';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    ListaPedidoComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RestauranteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
