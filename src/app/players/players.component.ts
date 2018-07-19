import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../practice-players';

// Component is a decorator function that specifies 
// Angular metadata for the component
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
// Always export the component class so you can inport it elsewhere
export class PlayersComponent implements OnInit {

		players = PLAYERS;
		
		selectedPlayer: Player;

		onSelect(player: Player): void {
			this.selectedPlayer = player;
		}

  constructor() { }

  ngOnInit() {
  }

}
