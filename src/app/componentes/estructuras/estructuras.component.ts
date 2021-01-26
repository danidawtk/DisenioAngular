import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent implements OnInit {
  verdad: boolean = false
  edad: number = 0
  constructor() { }

  ngOnInit(): void {
  }
  muestraLog(entrada:number,impar:boolean,primero:boolean,ultimo:boolean): void{
    console.log ("Índice: " + entrada)
    console.log (impar? "Posición impar": "Posición par")
    if (primero) console.log ("Primer elemento del array")
    if (ultimo) console.log ("Último elemento del array")
  }
}