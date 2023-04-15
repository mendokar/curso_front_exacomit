import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {


  email = "";
  message = "";
  enviar = "";
  mostrar = false;

  constructor() { }

  ngOnInit(): void {
  }


  /**
   * sendMessage
   */
  public sendMessage() {
    this.mostrar = false;

    if(this.message === "" && this.email === ""){
      alert("Datos Obligatorios");
      return;
    }


    console.log("Mensaje En Consola: " + this.message);

    this.enviar = "Hola ExacomIT, enviar el siguiente mensaje '" + this.message + "' al siguiente correo '"+this.email+"'";

    this.mostrar = true;

  }

}
