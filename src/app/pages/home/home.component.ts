import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  // Nombre,Apellido,RUT
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  redirectToListar(): void {
    this.router.navigate(['/listar']);
  }


}
