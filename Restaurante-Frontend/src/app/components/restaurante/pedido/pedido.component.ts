import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  startDate: string;
  formPedido: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formPedido = this.formBuilder.group({
      mesa: [1],
      atendente: [null],
      horaAbertura: [this.startDate = new Date().toISOString().slice(0, 16)],
      valorTotal: ['0.00']
    });

  }

  onSubmit() {
    console.log(this.formPedido.value);
    this.http.post('http://localhost:52224/api/pedido', this.formPedido.value)
      .subscribe(
        response => {
        console.log(response);
      },
      err => {
        console.log(`Erro:`, err);
      }
    );
  }
}
