import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonSearchService {

  constructor(private http:HttpClient) { }

  search(pokemon: string): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
  }

  getIndex(): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?limit=150`);
  }
}
