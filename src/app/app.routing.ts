//Importar modulos del routing de Angular
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar Componentes
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { ContactoComponent } from './contacto/contacto.component';


//Array de configuracion de la rutas
const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'zapatillas', component: ZapatillasComponent },
	{ path: 'videojuegos', component: VideojuegoComponent },
	{ path: 'cursos', component: CursosComponent },	
	{ path: 'cursos/:nombre/:followers', component: CursosComponent },	
	{ path: 'externo', component: ExternoComponent },
	{ path: 'contacto', component: ContactoComponent },
	{ path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);