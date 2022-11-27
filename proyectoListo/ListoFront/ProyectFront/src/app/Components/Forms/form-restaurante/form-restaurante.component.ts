import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Restaurante } from 'src/app/Models/Restaurante';
import { ApiService } from 'src/app/Services/api.service';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-form-restaurante',
  templateUrl: './form-restaurante.component.html',
  styleUrls: ['./form-restaurante.component.css']
})
export class FormRestauranteComponent {
  addressForm = this.fb.group({
    nombre: ["", Validators.required],
    telefono: ["", Validators.required],
    celular: ["", Validators.required],
    direccion: ["", Validators.required],
    ciudad: ["", Validators.required],
    email: ["", Validators.required],
    contrasena: ["", Validators.compose([
      Validators.required, Validators.minLength(8), Validators.maxLength(16)])],
  });

  hasUnitNumber = false;
  titulo=""

  constructor(private fb: FormBuilder,public service:ApiService, public dialog:MatDialog, public modalservice: ModalService) {}

  ngOnInit(): void{ 

    this.modalservice.accion.subscribe((res)=>{
      console.log(res);
      this.titulo=res;
      console.log(this.modalservice.restaurante);
      if(res=='Editar'){ 
        this.addressForm.controls['nombre'].setValue(this.modalservice.restaurante.nomRest)
        this.addressForm.controls['telefono'].setValue(this.modalservice.restaurante.telfijRest)
        this.addressForm.controls['celular'].setValue(this.modalservice.restaurante.celRest)
        this.addressForm.controls['direccion'].setValue(this.modalservice.restaurante.dirRest)
        this.addressForm.controls['ciudad'].setValue(this.modalservice.restaurante.ciudadRest)
        this.addressForm.controls['email'].setValue(this.modalservice.restaurante.emailRest)

      }

    })
  }

  async onSubmit() {
    if (this.modalservice.accion.value =="Crear"){
      console.log(this.modalservice.accion.value);
      console.log(this.addressForm);
      if(this.addressForm.valid){
        console.log(this.modalservice.accion.value);
        const restaurante:Restaurante={
          nomRest: this.addressForm.controls['nombre'].value,
          telfijRest: this.addressForm.controls['telefono'].value,
          celRest: this.addressForm.controls['celular'].value,
          dirRest: this.addressForm.controls['direccion'].value,
          ciudadRest: this.addressForm.controls['ciudad'].value,
          emailRest: this.addressForm.controls['email'].value,
          contraseñaRest: this.addressForm.controls['contrasena'].value
        }
        console.log(restaurante);
        this.service.Post('Restaurantes', restaurante)
        window.location.reload();
      }
    }else{
      if(this.addressForm.valid){
        const restaurante:Restaurante={
          idRest: this.modalservice.restaurante.idRest,
          nomRest: this.addressForm.controls['nombre'].value,
          telfijRest: this.addressForm.controls['telefono'].value,
          celRest: this.addressForm.controls['celular'].value,
          dirRest: this.addressForm.controls['direccion'].value,
          ciudadRest: this.addressForm.controls['ciudad'].value,
          emailRest: this.addressForm.controls['email'].value,
          contraseñaRest:this.addressForm.controls['contrasena'].value
        }
      const respuesta = await this.service.Put("Restaurantes",restaurante,this.modalservice.restaurante.idRest);  //nomCli es colocar el id
      window.location.reload();
    }

  }
}

}
