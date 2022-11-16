import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormClienteComponent } from './Components/Forms/form-cliente/form-cliente.component';
import { FormRestauranteComponent } from './Components/Forms/form-restaurante/form-restaurante.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ModalTemplateComponent } from './Components/modal-template/modal-template.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RestauranteComponent } from './Components/restaurante/restaurante.component';
import { FormCartaComponent } from './Components/Forms/form-carta/form-carta.component';
import { EmpleadosComponent } from './Components/empleados/empleados.component';
import { DomiciliosComponent } from './Components/domicilios/domicilios.component';
import { CartaComponent } from './Components/carta/carta.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    MenuComponent,
    FormClienteComponent,
    FormRestauranteComponent,
    ModalTemplateComponent,
    RestauranteComponent,
    FormCartaComponent,
    EmpleadosComponent,
    DomiciliosComponent,
    CartaComponent,
  ],
  imports: [
    MatDialogModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
