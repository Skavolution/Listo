import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule { }
