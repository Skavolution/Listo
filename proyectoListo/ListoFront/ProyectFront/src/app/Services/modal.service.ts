import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clientes } from '../Models/Clientes';
import { Restaurante } from '../Models/Restaurante';
import { Carta } from '../Models/Carta';
import { Empleados } from '../Models/Empleados';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  titulo =""
  clientes:Clientes
  restaurante:Restaurante
  carta:Carta
  empleados:Empleados

  accion=new BehaviorSubject("")

  constructor() { }
}
