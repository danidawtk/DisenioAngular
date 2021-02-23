import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mensaje } from '../clases/mensaje';

const url = 'http://localhost/backendphp/mensajes/'

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http:HttpClient) { }

  listarMensajes(): Observable<any>{
    return this.http.get(url)
  }
  insertarMensaje(mensaje): Observable<any>{
    return this.http.post(url, mensaje)
  }
  borrarMensaje(id): Observable<any>{
    return this.http.delete(url+id)
  }
}
