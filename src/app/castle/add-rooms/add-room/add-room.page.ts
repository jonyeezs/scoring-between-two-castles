import { Component, OnInit, OnDestroy } from '@angular/core';
import { RoomRepositoryService } from 'src/app/core/room-repository.service';
import { ActivatedRoute } from '@angular/router';
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
  public castleName: string;
  public rooms: Room[];
  private subscription: Subscription;
  public selectedSpace: {
    x: number;
    y: number;
  }[];

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

  onSubmit() {
    this.roomRepo.add(
      new Room('some room', '🎉', this.selectedSpace, { description: 'ok' })
    );
  }
}
