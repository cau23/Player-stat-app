import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {
	@Input() player: Player;


  constructor(
  	// Holds info about Route to an instance of the PlayerProfileComponent
  	private route: ActivatedRoute,
  	// Gets player data from remote server
  	// Component uses it to get player-to-display
  	private playerService: PlayerService,
  	// angular service for interacting with the browser
  	private location: Location
  ) { }

  // Extract ID route parameter
  ngOnInit(): void {
  	this.getPlayer();
  }

  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
  	this.playerService.getPlayer(id)
  	.subscribe(player => this.player = player);
	}

	goBack(): void {
		this.location.back();
	}

  save(): void {
    this.playerService.updatePlayer(this.player)
    .subscribe(() => this.goBack());
  }
}

