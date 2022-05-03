import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private pokemonIndex = new BehaviorSubject<any>([]);
  private pokemonModal = new BehaviorSubject<any>([]);

  currentPokemonIndex = this.pokemonIndex.asObservable();
  currentPokemonModal = this.pokemonModal.asObservable();

  constructor() { }

  changepokemonIndex(newPokemonIndex:any[]) {
    this.pokemonIndex.next(newPokemonIndex);
  }

  changepokemonModal(newPokemonId:any) {
    this.pokemonModal.next(newPokemonId);
  }
}
