import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/clases/user';
import { FormBuilder, Validators } from '@angular/forms';
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-listar-perfiles',
  templateUrl: './listar-perfiles.component.html',
  styleUrls: ['./listar-perfiles.component.css']
})
export class ListarPerfilesComponent implements OnInit {
  usuarios: any
  usuarioSel: User
  formMensaje = this.fb.group({
    idDestinatario:[''],
    mensaje:['',Validators.required]
  })
  constructor(private servicioUsuario:UserService, private fb:FormBuilder, private servicioMensaje:MensajesService) { }

  ngOnInit(): void {
    this.obtenerUsuario()
  }
  obtenerUsuario(): void{
    this.servicioUsuario.listarUsuarios().subscribe(
      respuesta =>{
        console.log(respuesta)
        this.usuarios=respuesta

      },
      error => {console.log(error)}
    )
  }
  escribirMensaje():void{
    console.log(this.formMensaje.value)
    this.servicioMensaje.insertarMensaje(this.formMensaje.value).subscribe(
      respuesta =>{
        console.log(respuesta)
      },
      error =>{console.log(error)}
    )
  }
}
