import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ChosenSelectableMiniRoom {
  sections: { x: number; y: number }[];
}

@Injectable({
  providedIn: 'root',
})
export class SelectRoomManagerService {
  private selectedState$: Subject<ChosenSelectableMiniRoom>;
  constructor() {
    this.selectedState$ = new Subject();
  }

  get selectedChange() {
    return this.selectedState$.asObservable();
  }

  setSelected(value: any) {
    this.selectedState$.next({ sections: value });
  }
}
