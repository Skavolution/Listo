import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { ClienteLogin } from 'src/app/ModelsView/ClienteLoginMV';
import { ApiService } from 'src/app/Services/api.service';
import { LoginService } from 'src/app/Services/login.service';
import { ModalTemplateComponent } from '../../modal-template/modal-template.component';

@Component({
  selector: 'app-fom-login',
  templateUrl: './fom-login.component.html',
  styleUrls: ['./fom-login.component.css']
})
export class FomLoginComponent {
  addressForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  em = "";
  pass ="";
  user:ClienteLogin;


  constructor(private fb: FormBuilder,
              public modalservice: ModalTemplateComponent,
              public api: ApiService,
              public dialog : MatDialog,
              public loginservice: LoginService,
              public router:Router,
              ) {}

  async onSubmit() {

    this.em = this.addressForm.controls.email.value;
    this.pass = this.addressForm.controls.password.value;
    
    //var DataResponse: UsuarioLogin = await (this.api.login('Clientes', this.em, this.pass))
    //this.user = DataResponse[0];
    
  }
}
