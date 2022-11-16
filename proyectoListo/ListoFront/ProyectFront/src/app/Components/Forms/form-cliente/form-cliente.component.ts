import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Clientes } from 'src/app/Models/Clientes';
import { ApiService } from 'src/app/Services/api.service';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})

export class FormClienteComponent {
  addressForm = this.fb.group({
    cedula: ["",Validators.compose([Validators.required,Validators.minLength(6), Validators.maxLength(15)])],
    nombre: ["", Validators.required],
    email: ["", Validators.required],
    celular: ["", Validators.compose([Validators.required,Validators.minLength(10), Validators.maxLength(10)])],
    telefonoFijo: ["", Validators.compose([Validators.required,Validators.minLength(10), Validators.maxLength(10)])],
    direccion:["",Validators.required],
    ciudad: ["", Validators.required],
    contraseña: ["", Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(15)])],
  });

  hasUnitNumber = false;
  titulo="";

  constructor(private fb: FormBuilder, public service:ApiService, public dialog:MatDialog, public modalservice:ModalService) {}

  ngOnInit(): void{ 

    this.modalservice.accion.subscribe((res)=>{
      console.log(res);
      this.titulo=res;
      console.log(this.modalservice.clientes);
      if(res=='Editar'){
        this.addressForm.controls['cedula'].setValue(this.modalservice.clientes.cedulaCli)
        this.addressForm.controls['nombre'].setValue(this.modalservice.clientes.nomCli)
        this.addressForm.controls['email'].setValue(this.modalservice.clientes.emailCli)
        this.addressForm.controls['celular'].setValue(this.modalservice.clientes.cedulaCli)
        this.addressForm.controls['direccion'].setValue(this.modalservice.clientes.dirCli)
        this.addressForm.controls['ciudad'].setValue(this.modalservice.clientes.ciudad)
        this.addressForm.controls['telefonoFijo'].setValue(this.modalservice.clientes.telfijCli)
      }
    })
  }

  async onSubmit() {
    if (this.modalservice.accion.value =="Crear"){
      if(this.addressForm.valid){
        const cliente:Clientes={
          cedulaCli:this.addressForm.controls['cedula'].value,
          nomCli:this.addressForm.controls['nombre'].value,
          celCli:this.addressForm.controls['celular'].value,
          telfijCli:this.addressForm.controls['telefonoFijo'].value,
          emailCli:this.addressForm.controls['email'].value,
          dirCli:this.addressForm.controls['direccion'].value,
          ciudad:this.addressForm.controls['ciudad'].value,
          contraseñaCli:this.addressForm.controls['contraseña'].value

        }
        this.service.Post('Clientes', cliente)
        window.location.reload();
      }
    }else{
      if(this.addressForm.valid){
        const cliente:Clientes={
          idCli:this.modalservice.clientes.idCli,
          cedulaCli: this.addressForm.controls['cedula'].value,
          nomCli: this.addressForm.controls['nombre'].value,
          celCli: this.addressForm.controls['celular'].value,
          telfijCli: this.addressForm.controls['telefonoFijo'].value,
          emailCli: this.addressForm.controls['email'].value,
          dirCli: this.addressForm.controls['direccion'].value,
          ciudad: this.addressForm.controls['ciudad'].value,
          contraseñaCli: this.addressForm.controls['contraseña'].value,
          
        }

      const respuesta = await this.service.Put("Clientes",cliente,this.modalservice.clientes.idCli);  //nomCli es colocar el id
      window.location.reload();
    }

  }
}








  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},
    {name: 'California', abbreviation: 'CA'},
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Connecticut', abbreviation: 'CT'},
    {name: 'Delaware', abbreviation: 'DE'},
    {name: 'District Of Columbia', abbreviation: 'DC'},
    {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
    {name: 'Florida', abbreviation: 'FL'},
    {name: 'Georgia', abbreviation: 'GA'},
    {name: 'Guam', abbreviation: 'GU'},
    {name: 'Hawaii', abbreviation: 'HI'},
    {name: 'Idaho', abbreviation: 'ID'},
    {name: 'Illinois', abbreviation: 'IL'},
    {name: 'Indiana', abbreviation: 'IN'},
    {name: 'Iowa', abbreviation: 'IA'},
    {name: 'Kansas', abbreviation: 'KS'},
    {name: 'Kentucky', abbreviation: 'KY'},
    {name: 'Louisiana', abbreviation: 'LA'},
    {name: 'Maine', abbreviation: 'ME'},
    {name: 'Marshall Islands', abbreviation: 'MH'},
    {name: 'Maryland', abbreviation: 'MD'},
    {name: 'Massachusetts', abbreviation: 'MA'},
    {name: 'Michigan', abbreviation: 'MI'},
    {name: 'Minnesota', abbreviation: 'MN'},
    {name: 'Mississippi', abbreviation: 'MS'},
    {name: 'Missouri', abbreviation: 'MO'},
    {name: 'Montana', abbreviation: 'MT'},
    {name: 'Nebraska', abbreviation: 'NE'},
    {name: 'Nevada', abbreviation: 'NV'},
    {name: 'New Hampshire', abbreviation: 'NH'},
    {name: 'New Jersey', abbreviation: 'NJ'},
    {name: 'New Mexico', abbreviation: 'NM'},
    {name: 'New York', abbreviation: 'NY'},
    {name: 'North Carolina', abbreviation: 'NC'},
    {name: 'North Dakota', abbreviation: 'ND'},
    {name: 'Northern Mariana Islands', abbreviation: 'MP'},
    {name: 'Ohio', abbreviation: 'OH'},
    {name: 'Oklahoma', abbreviation: 'OK'},
    {name: 'Oregon', abbreviation: 'OR'},
    {name: 'Palau', abbreviation: 'PW'},
    {name: 'Pennsylvania', abbreviation: 'PA'},
    {name: 'Puerto Rico', abbreviation: 'PR'},
    {name: 'Rhode Island', abbreviation: 'RI'},
    {name: 'South Carolina', abbreviation: 'SC'},
    {name: 'South Dakota', abbreviation: 'SD'},
    {name: 'Tennessee', abbreviation: 'TN'},
    {name: 'Texas', abbreviation: 'TX'},
    {name: 'Utah', abbreviation: 'UT'},
    {name: 'Vermont', abbreviation: 'VT'},
    {name: 'Virgin Islands', abbreviation: 'VI'},
    {name: 'Virginia', abbreviation: 'VA'},
    {name: 'Washington', abbreviation: 'WA'},
    {name: 'West Virginia', abbreviation: 'WV'},
    {name: 'Wisconsin', abbreviation: 'WI'},
    {name: 'Wyoming', abbreviation: 'WY'}
  ];

}
