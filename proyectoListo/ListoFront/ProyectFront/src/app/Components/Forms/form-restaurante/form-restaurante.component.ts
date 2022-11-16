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
    contraseña: ["", Validators.compose([
      Validators.required, Validators.minLength(8), Validators.maxLength(16)])],
  });

  hasUnitNumber = false;
  titulo=""

  constructor(private fb: FormBuilder,public service:ApiService, public dialog:MatDialog, public modalservice: ModalService) {}

  ngOnInit(): void{ 

    this.modalservice.accion.subscribe((res)=>{
      this.titulo=res;
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
      if(this.addressForm.valid){
        const restaurante:Restaurante={
          nomRest: this.addressForm.controls['nombre'].value,
          telfijRest: this.addressForm.controls['telefono'].value,
          celRest: this.addressForm.controls['celular'].value,
          dirRest: this.addressForm.controls['direccion'].value,
          ciudadRest: this.addressForm.controls['ciudad'].value,
          emailRest: this.addressForm.controls['email'].value,
          contraseñaRest: this.addressForm.controls['contraseña'].value
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
          contraseñaRest:this.addressForm.controls['contraseña'].value
        }
      const respuesta = await this.service.Put("Restaurantes",restaurante,this.modalservice.restaurante.idRest);  //nomCli es colocar el id
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
