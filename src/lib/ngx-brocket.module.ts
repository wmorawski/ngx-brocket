import { NgModule } from '@angular/core';
import { NgxBrocketComponent } from './ngx-brocket.component';
import { BracketItemComponent } from './components/bracket-item/bracket-item.component';
import { SingleComponent } from './components/game-kinds/single/single.component';
import { DoubleComponent } from './components/game-kinds/double/double.component';
import { GameKindComponent } from './components/game-kinds/game-kind/game-kind.component';
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [NgxBrocketComponent, BracketItemComponent, SingleComponent, DoubleComponent, GameKindComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgxBrocketComponent]
})
export class NgxBrocketModule { }
