import {Component, ComponentRef, Input, OnInit} from '@angular/core';
import {BrocketGame, BrocketGameKind} from './types/brocket.types';
@Component({
  selector: 'lib-ngx-brocket',
  templateUrl: 'ngx-brocket.component.html',
  styles: []
})
export class NgxBrocketComponent implements OnInit {
  public BrocketGameKind = BrocketGameKind;
  @Input() game: BrocketGame;

  constructor() { }

  ngOnInit(): void {
  }

}
