import { CepService } from './../cep.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  cep: any = {};
  numero: any;
  constructor(private cepService: CepService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // pega o numero que passa no parametro da url e usa para pegar o numero do cep
    this.activatedRoute.params.subscribe(params => {
      this.cepService.getCep(params.numeroCep).subscribe(value => {
        console.log(value);
        this.cep = value;
      });
    });
  }

}
