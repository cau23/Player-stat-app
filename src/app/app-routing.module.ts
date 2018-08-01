import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'profile/:id', component: PlayerProfileComponent },
	{ path: 'players', component: PlayersComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
 
})
export class AppRoutingModule { }
