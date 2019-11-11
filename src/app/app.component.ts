import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';


//Decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Master JS - Angular';
  public descripcion: string;
  public mostrat_videojuegos: boolean = true;
  public config;

  constructor(){
  	this.title = Configuracion.tituo;
  	this.descripcion = Configuracion.descripcion;
  	this.config = Configuracion;
  }

  ocultarVideoJuegos(value)
  {
  	this.mostrat_videojuegos = value;
  }
}
