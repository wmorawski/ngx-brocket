import { Component, OnInit } from '@angular/core';
import {GameKindComponent} from "../game-kind/game-kind.component";
import {GameKindService} from "../game-kind/game-kind.service";

@Component({
  selector: 'lib-double',
  templateUrl: './double.component.html',
  styleUrls: ['./double.component.css']
})
export class DoubleComponent extends GameKindComponent implements OnInit {

  constructor(protected gameKindService: GameKindService) {
    super(gameKindService);
  }

  ngOnInit(): void {
  }

}
