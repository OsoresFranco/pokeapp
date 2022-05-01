import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/data-share.service';
import { PokemonSearchService } from 'src/app/services/pokemon-search.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  pokemonIndex:any[] = []

  getImg(name:string){
    return `https://projectpokemon.org/images/normal-sprite/${name}.gif`
  }

  constructor(private data:DataShareService, private http:PokemonSearchService) { }

  ngOnInit(): void {
    this.data.currentPokemonIndex.subscribe(
      (pokemonIndex) => this.pokemonIndex = pokemonIndex
      ),
    this.http.getIndex().subscribe((data:any) =>{
      data.results.forEach((element:any) => {
        this.http.search(element.name)
        .subscribe((uniqueResponse:any)=>{
          this.pokemonIndex.push(uniqueResponse);
        })
      });
    })
  }

}
