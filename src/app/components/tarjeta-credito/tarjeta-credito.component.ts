import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private fb: FormBuilder,private toastr: ToastrService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ['', [Validators.required, Validators.maxLength(5),  Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
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
    this.toastr.success('La Tarjeta fue Registrata con Exito.!', 'Tarjeta Registrada!');
    this.form.reset();
    //console.log(tarjeta);

  }

}
