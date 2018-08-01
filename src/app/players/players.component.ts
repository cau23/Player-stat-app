import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

// Component is a decorator function that specifies 
// Angular metadata for the component
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
// Always export the component class so you can inport it elsewhere
export class PlayersComponent implements OnInit {

		players: Player[];
		
		selectedPlayer: Player;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  	this.getPlayers();
  }

  onSelect(player: Player): void {
		this.selectedPlayer = player;
	}

	getPlayers(): void {
  	this.playerService.getPlayers() 
  		.subscribe(players => this.players = players);  }
}
