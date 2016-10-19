import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './home.component';
import { ClansListComponent }  from './clans/clans-list.component';
import { PlayersListComponent }  from './players/players-list.component';
import { LeagueComponent }  from './league/league.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clans', component: ClansListComponent },
  { path: 'clans/:id', component: ClansListComponent },
  { path: 'players', component: PlayersListComponent },
  { path: 'players/:id', component: PlayersListComponent },
  { path: 'league', component: LeagueComponent }
//  { path: 'heroes', component: HeroListComponent }
//  {
//    path: 'heroes',
//    component: HeroListComponent,
//    data: {
//      title: 'Heroes List'
//    }
//  },
//  { path: '', component: HomeComponent },
//  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });