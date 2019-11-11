import { Component, OnInit } from '@angular/core'
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../service/zapatilla.service';

@Component({
	selector: 'zapatillas',
	templateUrl: './zapatillas.component.html',
	providers: [ZapatillaService]
})

export class ZapatillasComponent implements OnInit{
	public titulo: string;
	public zapatillas: Array<Zapatilla>;
	public listMarcas: String[];
	public color: string;
	public mi_marca: string;

	constructor(
			private _zapatillaService: ZapatillaService
		){
		this.listMarcas = new Array();
		this.titulo = "Componente de Zapatillas";
		this.color = 'orange';
		this.mi_marca = 'Fila';		
	}

	ngOnInit(){
		this.zapatillas = this._zapatillaService.getZapatillas();
		//alert(this._zapatillaService.getTexto());
		this.marcas();
	}

	marcas(){
		this.zapatillas.forEach((zapatilla, indice)=>{
			if(this.listMarcas.indexOf(zapatilla.marca) < 0){
				this.listMarcas.push(zapatilla.marca);
			}			
			console.log(indice);
		});

		console.log(this.listMarcas);
	}

	getMarca(){
		alert("Marca ingresada " + this.mi_marca);
	}

	addMarca(){
		this.listMarcas.push(this.mi_marca);
	}

	borrarMarca(indice){
		//delete this.listMarcas[indice];
		this.listMarcas.splice(indice, 1);
	}

	onBlur()
	{
		console.log("Salio del Blur");
	}

	mostrarPalabra(){
		alert(this.mi_marca);
	}
}