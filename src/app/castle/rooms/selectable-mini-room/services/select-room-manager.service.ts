import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ChosenSelectableMiniRoom {
  inputId: number;
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

  setSelected(inputId: number, value: any) {
    this.selectedState$.next({ inputId, sections: value });
  }
}
