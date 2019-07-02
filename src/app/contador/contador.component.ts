import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }
  contador = 10;

  ngOnInit() {
    let num = 1;
    setInterval(() => {
      num++;
      this.contador = num;
    }, 1000);
  }
}
