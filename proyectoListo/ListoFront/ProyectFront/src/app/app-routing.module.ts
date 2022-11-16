import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './Components/carta/carta.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { DomiciliosComponent } from './Components/domicilios/domicilios.component';
import { FormCartaComponent } from './Components/Forms/form-carta/form-carta.component';
import { MenuComponent } from './Components/menu/menu.component';
import { RestauranteComponent } from './Components/restaurante/restaurante.component';
import { Carta } from './Models/Carta';

const routes: Routes = [
  {path: 'Clientes', component: ClientesComponent},
  {path: 'Restaurantes', component: RestauranteComponent},
  {path: 'Domicilio', component: DomiciliosComponent},
  {path: 'Carta', component: CartaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
