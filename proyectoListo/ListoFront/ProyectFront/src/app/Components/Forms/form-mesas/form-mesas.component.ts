import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Mesas } from 'src/app/Models/Mesas';
import { ApiService } from 'src/app/Services/api.service';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-form-mesas',
  templateUrl: './form-mesas.component.html',
  styleUrls: ['./form-mesas.component.css']
})
export class FormMesasComponent {
  addressForm = this.fb.group({
    nombre: ["", Validators.required],
    puestos: ["", Validators.required],
  });

  hasUnitNumber = false;
  titulo="";


  constructor(private fb: FormBuilder, public service:ApiService, public dialog:MatDialog, public modalservice:ModalService) {}

  ngOnInit(): void{ 

    this.modalservice.accion.subscribe((res)=>{
      console.log(res);
      this.titulo=res;
      console.log(this.modalservice.empleados);
      if(res=='Editar'){
        this.addressForm.controls['nombre'].setValue(this.modalservice.mesas.nombreInt)
        this.addressForm.controls['puestos'].setValue(this.modalservice.mesas.puMesa)
      }
    })
  }

  async onSubmit() {
    if (this.modalservice.accion.value =="Crear"){
      if(this.addressForm.valid){
        const mesas:Mesas={
          nombreInt:this.addressForm.controls['nombre'].value,
          puMesa:this.addressForm.controls['puestos'].value,
          idRest:"0",
        }
        this.service.Post('Mesas', mesas)
        window.location.reload();
      }
    }else{
      if(this.addressForm.valid){
          const mesas:Mesas={
            idMesa:this.modalservice.mesas.idMesa,
            nombreInt:this.addressForm.controls['nombre'].value,
            puMesa:this.addressForm.controls['puestos'].value,
            idRest:"0",
          
        }

      const respuesta = await this.service.Put("Mesas",mesas,this.modalservice.mesas.idMesa);  //colocar el id
      window.location.reload();
    }

  }
}

}
