import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from 'src/app/shared/pedido.model';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit {
  pedidos: Pedido[];
  constructor( private http: HttpClient,) { }

  ngOnInit() {
    this.refreshList();
    console.log();
  }

  refreshList() {
    this.http.get('http://localhost:52224/api/pedido')
    .toPromise()
    .then(response => this.pedidos = response as Pedido[]);
  }

}
