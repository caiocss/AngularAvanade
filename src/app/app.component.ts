import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Caio Santos';
  teste = 'teste';
  items = ['344', '1231', '8657', '214', '4', 'Caio', 'Santos', 'Angular', '2019'];

  ngOnInit() {
    setTimeout(() => {
      this.title = 'Caio';
    }, 3000);
  }
  novoItem() {
    const text = prompt('Digite seu nome: ');
    this.items.push(text);
  }
}
