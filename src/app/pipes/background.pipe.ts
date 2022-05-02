import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'background',
})
export class BackgroundPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'normal':
        return '#AAA67F';
      case 'fighting':
        return '#C12239';
      case 'flying':
        return '#A891EC';
      case 'poison':
        return '#A43E9E';
      case 'ground':
        return '#DEC16B';
      case 'rock':
        return '#B69E31';
      case 'bug':
        return '#A7B723';
      case 'ghost':
        return '#70559B';
      case 'steel':
        return '#B7B9D0';
      case 'fire':
        return '#F57D31';
      case 'water':
        return '#6493EB';
      case 'grass':
        return '#74CB48';
      case 'electric':
        return '#70559B';
      case 'psychic':
        return '#FB5584';
      case 'ice':
        return '#9AD6DF';
      case 'dragon':
        return '#7037FF';
      case 'dark':
        return '#75574C';
      case 'fairy':
        return '#E69EAC';
      case 'unknown':
        return '#666666';
      case 'shadow':
        return '#212121';
    }
    return '#ffffff';
  }
}
