import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private pokemonIndex = new BehaviorSubject<any>([]);

  currentPokemonIndex = this.pokemonIndex.asObservable();

  constructor() { }

  changepokemonIndex(newPokemonIndex:any[]) {
    this.pokemonIndex.next(newPokemonIndex);
  }
}
