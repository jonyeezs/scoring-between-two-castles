import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoomRepositoryService } from 'src/app/core/room-repository.service';
import { ActivatedRoute } from '@angular/router';
import { rooms as RoomSelection } from 'src/app/rooms/rooms';
import { Room, RoomDefinition } from 'src/app/models/rooms/room.type';
import { Subscription } from 'rxjs';
import {
  SelectRoomManagerService,
  ChosenSelectableMiniRoom,
} from '../../rooms/selectable-mini-room/services/select-room-manager.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit, OnDestroy {
  protected castleName: string;
  protected rooms: Room[];
  protected roomMenu = RoomSelection;
  protected form = new FormGroup({
    coordinates: new FormControl([]),
    room: new FormControl(''),
  });

  private subscription: Subscription;

  constructor(
    private router: ActivatedRoute,
    private roomRepo: RoomRepositoryService,
    private roomSelection: SelectRoomManagerService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.castleName = this.router.snapshot.paramMap.get('castleName');

    this.rooms = [
      ...this.roomRepo.getAllOccupied(),
      ...this.roomRepo.getAllFreeSpace(),
    ];

    this.subscription = this.roomSelection.selectedChange.subscribe(
      (e: ChosenSelectableMiniRoom) => {
        this.form.get('coordinates').setValue(e.sections);
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected compareWith(o1, o2) {
    return o1.name === o2.name;
  }

  onSubmit() {
    const room: RoomDefinition = this.form.value.room;
    this.roomRepo.add(
      new Room(room.name, room.type, this.form.value.coordinates, room.rule)
    );

    this.navCtrl.navigateBack(['castle', this.castleName]);
  }
}
