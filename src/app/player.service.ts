import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from './player';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
	providedIn: 'root',
})
export class PlayerService {

	constructor(private messageService: MessageService) { }

	getPlayers(): Observable<Player[]> {
		// TODO: send the message _after_ fetching the players
		this.messageService.add('PlayerService: fetched players');
		return of(PLAYERS);
	}

	// Adding playerService.getPlayer method
	getPlayer(id: number): Observable<Player> {
    // TODO: send the message _after_ fetching the player
    this.messageService.add(`PlayerService: fetched player id=${id}`);
    return of(PLAYERS.find(player => player.id === id));
  }
}
