import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin= this.fb.group({
    password:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]]
  })
  constructor(private fb:FormBuilder, private servicioUsuario:UserService) { }

  ngOnInit(): void {
  }
  submit(): void{
    this.servicioUsuario.acceso(this.formLogin.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.guardarToken(respuesta)
      },
      error => console.log(error)
    )
  }
}
