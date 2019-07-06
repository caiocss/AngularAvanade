import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ContadorBotoesComponent } from './contador-botoes/contador-botoes.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CepModule } from './cep/cep.module';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // Forma de importar do angular 8 para cima
  { path: 'todos', canActivate: [AuthGuard], loadChildren: () =>
  import('./todo/todo.module').then(m => m.TodoModule) },
  // Abaixo a forma de importar do Angular 7 para baixo
  // { path: 'todo', loadChildren: './todo/todo.module.ts#TodoModule' },
  { path: 'cep', loadChildren: () =>
  import('./cep/cep.module').then(m => m.CepModule) },
  // { path: 'cep', component: CepTextoComponent },
  // { path: 'cep/:numeroCep', component: CepComponent }
  { path: 'auth', loadChildren: () =>
  import('./auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ContadorBotoesComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
