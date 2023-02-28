import {Component, Input, OnInit} from '@angular/core';
import {GameKindService} from "./game-kind.service";
import {BrocketMatch} from "../../../types/brocket.types";

@Component({
  selector: 'lib-game-kind',
  templateUrl: './game-kind.component.html',
  styleUrls: ['./game-kind.component.css']
})
export class GameKindComponent {
  @Input() matches: BrocketMatch[];

  public tree: any[];

  constructor(protected gameKindService: GameKindService) { }

}
