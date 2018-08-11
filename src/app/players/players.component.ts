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

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  	this.getPlayers();
  }

	getPlayers(): void {
  	this.playerService.getPlayers() 
  		.subscribe(players => this.players = players);  
  }
  
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.playerService.addPlayer({ name } as Player)
      .subscribe(player => {
        this.players.push(player);
      });
  }

  delete(player: Player): void {
  this.players = this.players.filter(h => h !== player);
  this.playerService.deletePlayer(player).subscribe();
}

}
