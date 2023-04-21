import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EkranListaComponent } from './ekran-lista/ekran-lista.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: EkranListaComponent },
  { path: 'login', loadChildren: () => import('./login-area/login-area.module').then(m => m.LoginAreaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
