import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Empleados } from 'src/app/Models/Empleados';
import { ApiService } from 'src/app/Services/api.service';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-form-empleados',
  templateUrl: './form-empleados.component.html',
  styleUrls: ['./form-empleados.component.css']
})
export class FormEmpleadosComponent {
  addressForm = this.fb.group({
    nombre: ["", Validators.required],
    cargo: ["", Validators.required],
    celular: ["", Validators.required],
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
        this.addressForm.controls['nombre'].setValue(this.modalservice.empleados.nomEmp)
        this.addressForm.controls['cargo'].setValue(this.modalservice.empleados.cargoEmp)
        this.addressForm.controls['celular'].setValue(this.modalservice.empleados.celEmp)
      }
    })
  }

  async onSubmit() {
    if (this.modalservice.accion.value =="Crear"){
      if(this.addressForm.valid){
        const empleado:Empleados={
          nomEmp:this.addressForm.controls['nombre'].value,
          cargoEmp:this.addressForm.controls['cargo'].value,
          celEmp:this.addressForm.controls['celular'].value,
          idRest:"0",
        }
        this.service.Post('Empleadoes', empleado)
        window.location.reload();
      }
    }else{
      if(this.addressForm.valid){
          const empleado:Empleados={
            idEmp:this.modalservice.empleados.idEmp,
            nomEmp:this.addressForm.controls['nombre'].value,
            cargoEmp:this.addressForm.controls['cargo'].value,
            celEmp:this.addressForm.controls['celular'].value,
            idRest:"0",
          
        }

      const respuesta = await this.service.Put("Empleadoes",empleado,this.modalservice.empleados.idEmp);  //nomCli es colocar el id
      window.location.reload();
    }

  }
}



}
