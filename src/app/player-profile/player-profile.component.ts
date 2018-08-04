import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
  	private PlayerService: PlayerService,
  	// angular service for interacting with the browser
  	private location: Location
  ) { }

  // Extract ID route parameter
  ngOnInit(): void {
  	this.getPlayer();
  }

  getPlayer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
  	this.PlayerService.getPlayer(id)
  	.subscribe(player => this.player = player);
	}

	goBack(): void {
		this.location.back();
	}
}

