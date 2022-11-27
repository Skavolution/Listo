import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Carta } from 'src/app/Models/Carta';
import { ApiService } from 'src/app/Services/api.service';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-form-carta',
  templateUrl: './form-carta.component.html',
  styleUrls: ['./form-carta.component.css']
})
export class FormCartaComponent {
  addressForm = this.fb.group({
    nombre: ["", Validators.required],
    descripcion: ["", Validators.required],
    precio: ["", Validators.required],
    imagen: "",
    estado: ["", Validators.required],
  });

  hasUnitNumber = false;
  titulo="";
constructor(private fb: FormBuilder, public service:ApiService,public dialog:MatDialog, public modalservice:ModalService ){}

ngOnInit(): void{ 

  this.modalservice.accion.subscribe((res)=>{
    this.titulo=res;
    if(res=='Editar'){
      this.addressForm.controls['nombre'].setValue(this.modalservice.carta.nomPlato)
      this.addressForm.controls['descripcion'].setValue(this.modalservice.carta.desPlato)
      this.addressForm.controls['precio'].setValue(this.modalservice.carta.precio)
      this.addressForm.controls['imagen'].setValue(this.modalservice.carta.imagen)
      this.addressForm.controls['restaurante'].setValue(this.modalservice.carta.idRest)
      this.addressForm.controls['estado'].setValue(this.modalservice.carta.estadoPlato)
      
    }
  })
}

async onSubmit() {
  if (this.modalservice.accion.value =="Crear"){
    console.log(this.modalservice.accion.value);
    console.log(this.addressForm.valid);
    console.log(this.addressForm);
    if(this.addressForm.valid){
      console.log(this.modalservice.accion.value);
      const carta:Carta={
        nomPlato:this.addressForm.controls['nombre'].value,
        desPlato:this.addressForm.controls['descripcion'].value,
        precio:this.addressForm.controls['precio'].value,
        imagen:this.addressForm.controls['imagen'].value,
        idRest:"0",
        estadoPlato:this.addressForm.controls['estado'].value,

      }
      console.log(carta);
      this.service.Post('Menus', carta);
      //window.location.reload();
    }
  }else{
    if(this.addressForm.valid){
      const carta:Carta={
        idPlato:this.modalservice.carta.idPlato,
        nomPlato:this.addressForm.controls['nombre'].value,
        desPlato:this.addressForm.controls['descripcion'].value,
        precio:this.addressForm.controls['precio'].value,
        imagen:this.addressForm.controls['imagen'].value,
        idRest:this.addressForm.controls['restaurante'].value,
        estadoPlato:this.addressForm.controls['estado'].value,
        
      }

    const respuesta = await this.service.Put("Menus",carta,this.modalservice.carta.idPlato);  //nomCli es colocar el id
    window.location.reload();
  }
}
}
}
