import { Component, OnInit } from '@angular/core';
import { Character } from './interfaces/character.interface';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { DbzService } from './services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    //Lo suyo es siempre declarar el service (logica de negocio) privado
    constructor(private dbzService: DbzService) {

    }

    get characters(): Character[]{
      return [...this.dbzService.characters]; // caracter spread (...) para crear una copia
    }

    onDeleteCharacter(id: string):void{
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character:Character):void{
      this.dbzService.AddCharacter(character);
    }
}
