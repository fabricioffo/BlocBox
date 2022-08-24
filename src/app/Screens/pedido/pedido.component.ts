import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
}

interface Temp {
  value: string;
  viewValue: string;
}

interface Tam {
  value: string;
  viewValue: string;
}

interface Entrega {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  router: Router;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Próprio'},
    {value: 'pizza-1', viewValue: 'Terceiro'},
    {value: 'tacos-2', viewValue: 'Compartilhado'},
  ];

  temps: Temp[] = [
    {value: 'temp-0', viewValue: 'Alta'},
    {value: 'temp-1', viewValue: 'Ambiente'},
    {value: 'temp-2', viewValue: 'Baixa'},
  ];

  tams: Tam[] = [
    {value: 'tam-0', viewValue: 'Grande'},
    {value: 'tam-1', viewValue: 'Pequeno'},
  ];

  entregas: Entrega[] = [
    {value: 'sim-0', viewValue: 'Sim'},
    {value: 'nao-1', viewValue: 'Não'},
  ];

  showFiller = false;

  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit(): void {

  }

  ChangePage()
  {
    this.router.navigate(['/login']);
  }

}
