import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';

import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';
import { RacesModule }   from './races/races.module';
import { CountriesModule }   from './countries/countries.module';
import { ClansModule }   from './clans/clans.module';
import { PlayersModule }   from './players/players.module';
import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';
import { routing, appRoutingProviders }   from './app.routing';

@NgModule({
	imports:      [ 
		BrowserModule,
		HttpModule,
		CoreModule,
		SharedModule,
		RacesModule,
		CountriesModule,
		ClansModule,
		PlayersModule,
		routing
	],
	declarations: [ 
		AppComponent, 
		HomeComponent
	],
  providers: [
		appRoutingProviders
  ],
	bootstrap:    [ 
		AppComponent 
	]
})
export class AppModule { }