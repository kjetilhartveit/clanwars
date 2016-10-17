import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent, HomeComponent, routing, appRoutingProviders }   from './';
import { UtilityService, ConfigService, PathsService, MainNavComponent }   from './shared';
import { FormHelperService, FieldIsRequiredComponent }   from './form';
import { WebHelperService }   from './web';
import { CountriesService, CountryToFlagPathPipe }   from './countries';
import { RacesService, RaceToIconPathPipe }   from './races';
import { ClansListComponent, ClanDetailsComponent, ClansService }   from './clans';
import { PlayersListComponent, PlayerDetailsComponent, PlayersService }   from './players';

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
		FieldIsRequiredComponent,
		ClansListComponent,
		ClanDetailsComponent,
		PlayersListComponent,
		PlayerDetailsComponent,
		HomeComponent,
		CountryToFlagPathPipe,
		RaceToIconPathPipe
	],
  providers: [
    { provide: ConfigService, useClass: ConfigService },
    { provide: FormHelperService, useClass: FormHelperService },
    { provide: WebHelperService, useClass: WebHelperService },
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