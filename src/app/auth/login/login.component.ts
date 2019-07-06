import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  senha = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  enviar() {
    console.log(this.email);

    this.authService.login(this.email, this.senha)
    .subscribe((value: any) => {
      alert('Usuário logado com sucesso!');
      console.log(value);
      localStorage.setItem('token', value.idToken);

      this.authService.setUser({
        id: value.localId,
        email: value.email,
      });

      this.router.navigateByUrl('/todos');
    },
    (error) => {
      console.log(error);
      switch (error.error.error.message) {
        case 'EMAIL_NOT_FOUND':
          alert('Email não encontrado');
          break;
          case 'INVALID_PASSWORD':
            alert('Senha incorreta');
            break;
            default: alert('Não foi possivel logar');
      }
    });
  }
}
