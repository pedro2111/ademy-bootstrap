import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulasComponent } from './aulas/aulas.component';
import { DesafioWhatsappComponent } from './desafio-whatsapp/desafio-whatsapp.component';
import { Desafio1Component } from './desafio1/desafio1.component';


const routes: Routes = [
    {path: 'desafio1', component: Desafio1Component},
    {path: 'aulas', component: AulasComponent},
    {path: 'desafiowpp', component: DesafioWhatsappComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
