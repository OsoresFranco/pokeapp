import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonSearchService } from 'src/app/services/pokemon-search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private searchpokemon:PokemonSearchService) { }
  mapped:any[] = []
  pokemon = new FormControl('');

  searchSubmit(){
    this.searchpokemon.search(this.pokemon.value).subscribe(data =>{
      console.log(data)
    })

  }

  ngOnInit(): void {
  }

}
