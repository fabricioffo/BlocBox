import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './Screens/cadastro/cadastro.component';
import { LoginComponent } from './Screens/login/login.component';
import { PagInicialComponent } from './Screens/pag-inicial/pag-inicial.component';
import { PedidoComponent } from './Screens/pedido/pedido.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'pag-inicial', component: PagInicialComponent },
  { path: 'pedido', component: PedidoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
