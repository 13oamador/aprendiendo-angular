import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
	
	public zapatillas: Array<Zapatilla>;

	constructor(){
		this.zapatillas = [
			new Zapatilla("Air Max", 190, "Nike", "Rojo", true),
			new Zapatilla("Cortez", 110, "Nike", "Blanco", true),
			new Zapatilla("Reebook Classic", 50, "Reebook", "Negra", true),
			new Zapatilla("Runner", 180, "Nike", "Gris", false)
		];
	}

	getTexto(){
		return "Hola Mundo desde Angular";
	}

	getZapatillas(): Array<Zapatilla>{
		return this.zapatillas;
	}
}