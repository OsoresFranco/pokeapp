import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss']
})
export class PokemonModalComponent implements OnInit {

  pokemonModal:any;

  getImg(name:string){
    let normalizedName = name.replace(/-/g, "_");
    return `https://projectpokemon.org/images/normal-sprite/${normalizedName}.gif`
  }

  getType(pokemonType:string){
    let normalizedType = pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1);
    return `../../../assets/icons/types/Property1=${normalizedType}.svg`
  }

  constructor(private dataShare:DataShareService) { }

  ngOnInit(): void {
    this.dataShare.currentPokemonModal.subscribe(
      (pokemonModal) => this.pokemonModal = pokemonModal
    )
  }

}
