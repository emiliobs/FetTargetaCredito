import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
//Variables:
listarTarjetas: any[] = [
  { titular: "Emilio Barrera", numeroTarjeta: "5454454545544545", fechaExpiracion : "05/05", cvv : "125" },
  { titular: "Lina Marulanda", numeroTarjeta: "8788778788878758", fechaExpiracion : "11/12", cvv : "452" }
];

  constructor() { }

  ngOnInit(): void {
  }

}
