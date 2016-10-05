import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent, HomeComponent, routing, appRoutingProviders }   from './';
import { UtilityService, ConfigService, PathsService, MainNavComponent }   from './shared';
import { ClansListComponent, ClanDetailsComponent, ClansService }   from './clans';
import { PlayersListComponent, PlayerDetailsComponent, PlayersService }   from './players';
import { CountriesService }   from './countries';
import { RacesService }   from './races';

/**
 * TODO Component's template/stylesheet URLs should use a relative URL instead of an "absolute" one
 * TODO Create separate Ng modules for big modules like Clans?
 * TODO Apparently barrels are no longer recommended by the Angular team
 * TODO Core Module? Shared Module? https://angular.io/docs/ts/latest/guide/style-guide.html#!#coding-conventions
 * TODO Should we bundle together all the CSS into one file?
 * TODO Services implement from a base class using f.ex generics?
 */

@NgModule({
	imports:      [ 
		BrowserModule,
		FormsModule,
		HttpModule,
		routing
	],
	declarations: [ 
		AppComponent, 
		MainNavComponent,
		ClansListComponent,
		ClanDetailsComponent,
		PlayersListComponent,
		PlayerDetailsComponent,
		HomeComponent
	],
  providers: [
    { provide: ConfigService, useClass: ConfigService },
    { provide: PathsService, useClass: PathsService },
    { provide: UtilityService, useClass: UtilityService },
    { provide: RacesService, useClass: RacesService },
    { provide: CountriesService, useClass: CountriesService },
    { provide: PlayersService, useClass: PlayersService },
    { provide: ClansService, useClass: ClansService },
		appRoutingProviders
  ],
	bootstrap:    [ 
		AppComponent 
	]
})

export class AppModule { }