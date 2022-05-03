import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DataShareService } from 'src/app/services/data-share.service';
import { PokemonSearchService } from 'src/app/services/pokemon-search.service';
import {MatDialog} from '@angular/material/dialog';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component'


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit{

  openDialog(pokemonItem:any){
    this.data.changepokemonModal(pokemonItem);
    this.dialog.open(PokemonModalComponent);
  }

  pokemonIndex:any[] = [];

  getImg(name:string){
    let normalizedName = name.replace(/-/g, "_");;
    return `https://projectpokemon.org/images/normal-sprite/${normalizedName}.gif`
  }

  constructor(private data:DataShareService, private http:PokemonSearchService, public dialog: MatDialog) { }

  page_size:number = 9;
  page_number:number = 1;
  pageSizeOptions:number[] = [6,9,12,15,18,21,151];
  handlePage(e:PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

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
