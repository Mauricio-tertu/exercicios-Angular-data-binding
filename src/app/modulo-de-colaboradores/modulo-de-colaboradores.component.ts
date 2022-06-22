import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-de-colaboradores',
  templateUrl: './modulo-de-colaboradores.component.html',
  styleUrls: ['./modulo-de-colaboradores.component.scss']
})
export class ModuloDeColaboradoresComponent implements OnInit {


titulo = "gestão de colaboradores";

colaboradores = { 
  nome: "nathan carlos",
  exercicio: "devPI",
  idade: 29,
  salario: 4500,

};


  constructor() { }
  
  ngOnInit(): void {
    console.log("teste");
  }

}
