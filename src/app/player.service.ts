import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Player } from './player';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
	providedIn: 'root',
})
export class PlayerService {


	private playersUrl = 'api/players'; // URL to web api

	constructor(
		private http: HttpClient,
		private messageService: MessageService) { }

	/** GET heroes from the server */
  getPlayers (): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl)
    	.pipe(
    		tap(players => this.log('fetched players')),
    		catchError(this.handleError('getplayers', []))
    		);
	}

	/** GET hero by id. Will 404 if id not found */
getPlayer(id: number): Observable<Player> {
  const url = `${this.playersUrl}/${id}`;
  return this.http.get<Player>(url).pipe(
    tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Player>(`getPlayer id=${id}`))
  );
}

  
    /** PUT: update the player on the server */
  updatePlayer (player: Player): Observable<any> {
    return this.http.put(this.playersUrl, player, httpOptions).pipe(
      tap(_ => this.log(`updated player id=${player.id}`)),
      catchError(this.handleError<any>('updatePlayer'))
    );
  }

  /** POST: add a new hero to the server */
addHero (player: Player): Observable<Player> {
  return this.http.post<Player>(this.playersUrl, player, httpOptions).pipe(
    tap((player: Player) => this.log(`added player w/ id=${player.id}`)),
    catchError(this.handleError<Player>('addPlayer'))
  );
}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}

/** Log a PlayerService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PlayerService: ${message}`);
  }
}
