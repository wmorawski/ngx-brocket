import {Component, OnInit} from '@angular/core';
import {GameKindComponent} from '../game-kind/game-kind.component';
import {GameKindService} from "../game-kind/game-kind.service";
import {BrocketGameKind} from "../../../types/brocket.types";

@Component({
  selector: 'lib-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent extends GameKindComponent implements OnInit {

  constructor(protected gameKindService: GameKindService) {
    super(gameKindService);
  }

  ngOnInit(): void {
    this.tree = this.gameKindService.buildTree(BrocketGameKind.SingleElimination, this.matches);
  }

}
