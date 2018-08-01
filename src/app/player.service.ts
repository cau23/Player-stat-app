import { Injectable } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './practice-players';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
	providedIn: 'root',
})
export class PlayerService {

	getPlayers(): Observable<Player[]> {
		// TODO: send the message _after_ fetching the players
		this.messageService.add('PlayerService: fetched players');
		return of(PLAYERS);
	}

  constructor(private messageService: MessageService) { }


  
}
