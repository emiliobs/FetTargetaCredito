import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titular: [''],
      numeroTarjeta: [''],
      fechaExpiracion: [''],
      cvv: [''],
    });
  }

  ngOnInit(): void {
  }

  agregarTarjeta() {
    console.log(this.form);

    //capturo los datos del formulario:
    const tarjeta: any = {
      titular : this.form.get('titular')?.value,
      numeroTarjeta : this.form.get('numeroTarjeta')?.value,
      fechaExpiracion : this.form.get('fechaExpiracion')?.value,
      cvv : this.form.get('cvv')?.value,
    };

    this.listarTarjetas.push(tarjeta);
    this.form.reset();
    //console.log(tarjeta);

  }

}
