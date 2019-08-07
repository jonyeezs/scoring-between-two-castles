import { Injectable } from '@angular/core';
import { rooms as RoomSelection } from 'src/app/rooms/rooms';
import * as FuzzySearch from 'fuzzy-search';
import { Observable, of } from 'rxjs';

import { AutoCompleteService } from 'ionic4-auto-complete';
import { RoomDefinition } from '@app/models/rooms/room.type';

@Injectable()
export class RoomSelectionAutocompleteService implements AutoCompleteService {
  labelAttribute = 'name';
  formValueAttribute = '';
  rooms = RoomSelection;
  fuzzy = new FuzzySearch(this.rooms, [this.labelAttribute], {
    caseSensitive: false,
  });
  constructor() {}

  getResults(keyword: string): Observable<RoomDefinition[]> {
    return of(this.fuzzy.search(keyword));
  }
}
