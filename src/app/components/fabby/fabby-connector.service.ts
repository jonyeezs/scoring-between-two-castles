import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FabbyConnectorService {
  private toShow$: ReplaySubject<boolean>;
  private _name: string;
  public showFabby$: Observable<boolean>;
  constructor() {
    this.toShow$ = new ReplaySubject(1);
    this.showFabby$ = this.toShow$.asObservable();
  }

  set currentCastle(name: string) {
    this._name = name;
  }

  get currentCastle() {
    return this._name;
  }

  hide() {
    this.toShow$.next(false);
  }

  show() {
    this.toShow$.next(true);
  }
}
