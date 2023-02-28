import {Injectable} from "@angular/core";
import {BrocketGameKind, BrocketMatch} from "../../../types/brocket.types";

@Injectable({providedIn: 'root'})
export class GameKindService {
  public buildTree(kind: BrocketGameKind, matches: BrocketMatch[]): any[] {
    switch (kind) {
      case BrocketGameKind.SingleElimination:
        return this.buildSingleEliminationTree(matches);
      case BrocketGameKind.DoubleElimination:
        return this.buildDoubleEliminationTree(matches);
      default:
        throw(new Error('Not assignable kind'));
    }
  }

  private buildSingleEliminationTree(matches: BrocketMatch[]): any[] {
    return [];
  }

  private buildDoubleEliminationTree(matches: BrocketMatch[]): any[] {
    return [];
  }
}
