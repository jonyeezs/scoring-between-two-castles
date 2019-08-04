import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoomRepositoryService } from 'src/app/core/room-repository.service';
import { ActivatedRoute } from '@angular/router';
import { rooms as RoomsAvailable } from 'src/app/rooms/rooms';
import { Room } from 'src/app/models/rooms/room.type';
import { Subscription } from 'rxjs';
import {
  SelectRoomManagerService,
  ChosenSelectableMiniRoom,
} from '../../rooms/selectable-mini-room/services/select-room-manager.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit, OnDestroy {
  protected castleName: string;
  protected rooms: Room[];
  protected availableRooms = RoomsAvailable;
  selectedSpace: {
    x: number;
    y: number;
  }[];

  private subscription: Subscription;

  constructor(
    private router: ActivatedRoute,
    private roomRepo: RoomRepositoryService,
    private roomSelection: SelectRoomManagerService
  ) {}

  ngOnInit() {
    this.castleName = this.router.snapshot.paramMap.get('castleName');

    this.rooms = [
      ...this.roomRepo.getAllOccupied(),
      ...this.roomRepo.getAllFreeSpace(),
    ];

    this.subscription = this.roomSelection.selectedChange.subscribe(
      (e: ChosenSelectableMiniRoom) => {
        this.selectedSpace = e.sections;
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected compareWith(o1, o2) {
    return o1.name === o2.name;
  }

  onSubmit() {}
}
