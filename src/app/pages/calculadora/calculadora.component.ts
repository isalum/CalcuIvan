import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  numeroUno!: number;
  numeroDos!: number;
  resultado!: number;

  constructor() {}

  ngOnInit(): void {}
  cargarValorUno(valor: number) {
    this.numeroUno = valor;
  }
  /*

  cargarValorDos(valor: number) {
    this.numeroDos = valor;
  }*/
  acciones(accion: string): void {

    switch(accion){
      case 'sumar':
        this.resultado = Number(this.numeroUno) + Number(this.numeroDos);
      break;
    }
    switch(accion){
      case 'restar':
        this.resultado = Number(this.numeroUno) - Number(this.numeroDos);
      break;
    }
    switch(accion){
      case 'por':
        this.resultado = Number(this.numeroUno) * Number(this.numeroDos);
      break;
    }
    switch(accion){
      case 'dividido':
        this.resultado = Number(this.numeroUno) / Number(this.numeroDos);
      break;
    }
  }
}
