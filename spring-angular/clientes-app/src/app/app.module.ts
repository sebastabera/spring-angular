import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';

import { ClienteService } from './clientes/cliente.service';

const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch:'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DirectivaComponent,
    FooterComponent,
    HeaderComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
