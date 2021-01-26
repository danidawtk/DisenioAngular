import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  variable: string= "texto de prueba"
  num1: number = 0
  usuarios = [
    {nombre: "Manolo", apellido: "López"},
    {nombre: "Rocío", apellido: "García"},
    {nombre: "Filomena", apellido: "Borrasca"}
  ]
  usuarioSel

  selUser(entrada):void{
    this.usuarioSel=entrada
  }

  constructor() { }

  ngOnInit(): void {
  }

}
