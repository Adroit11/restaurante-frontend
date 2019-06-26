import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  startDate: string;
  formPedido: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formPedido = this.formBuilder.group({
      idPedido: [null],
      mesa: [1],
      atendente: [null],
      horaAbertura: [this.startDate = new Date().toISOString().slice(0, 16)],
      valorTotal: ['0.00']
    });

  }

  onSubmit() {
    console.log(this.formPedido);
  }
}
