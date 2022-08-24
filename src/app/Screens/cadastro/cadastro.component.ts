import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit {

  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  ChangePage()
  {
    this.router.navigate(['/pag-inicial']);
  }

}
