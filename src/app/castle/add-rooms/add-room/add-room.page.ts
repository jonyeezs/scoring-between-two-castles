import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoomRepositoryService } from '@app/core/room-repo/room-repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Room, RoomDefinition } from 'src/app/models/rooms/room.type';
import { Subscription } from 'rxjs';
import {
  SelectRoomManagerService,
  ChosenSelectableMiniRoom,
} from '../../rooms/selectable-mini-room/services/select-room-manager.service';
import { FormGroup, FormControl } from '@angular/forms';
import { RoomSelectionAutocompleteService } from '../services/room-selection-autocomplete/room-selection-autocomplete.service';
import { MootRule } from '@app/rules/moot-rule';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit, OnDestroy {
  protected castleName: string;
  protected rooms: Room[];
  protected form = new FormGroup({
    coordinates: new FormControl([]),
    room: new FormControl(''),
  });

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private roomRepo: RoomRepositoryService,
    private roomSelection: SelectRoomManagerService,
    public roomSelectionCompletion: RoomSelectionAutocompleteService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.castleName = this.route.snapshot.paramMap.get('castleName');

    this.subscription = this.roomSelection.selectedChange.subscribe(
      (e: ChosenSelectableMiniRoom) => {
        this.form.get('coordinates').setValue(e.sections);
      }
    );
  }

  ionViewWillEnter() {
    this.rooms = [
      ...this.roomRepo.getAllOccupied(),
      ...this.roomRepo.getAllFreeSpace(),
    ];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const room: RoomDefinition = this.form.value.room;
    this.roomRepo.add(
      new Room(
        room.name,
        room.type,
        room.hanging,
        this.form.value.coordinates,
        room.rule,
      )
    );
    this.router.navigate(['castle', this.castleName], {
      skipLocationChange: true,
    });
  }
}
