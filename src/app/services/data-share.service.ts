import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private pokemonIndex = new BehaviorSubject<any>([]);
  private pokemonNames = new BehaviorSubject<any>([]);

  currentPokemonIndex = this.pokemonIndex.asObservable();
  currentPokemonNames = this.pokemonNames.asObservable();

  constructor() { }

  changepokemonIndex(newPokemonIndex:any[]) {
    this.pokemonIndex.next(newPokemonIndex);
  }

  changepokemonNames(newPokemonNames:any[]) {
    this.pokemonNames.next(newPokemonNames);
  }
}
