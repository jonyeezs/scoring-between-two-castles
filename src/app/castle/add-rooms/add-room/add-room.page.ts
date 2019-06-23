import { Component, OnInit } from '@angular/core';
import { RoomRepositoryService } from 'src/app/core/room-repository.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RoomWidget } from '../../castle-layout/room-to-grid/room-widget.type';
import { RoomGridFactoryService } from '../../castle-layout/room-to-grid/room-grid-factory/room-grid-factory.service';
import { Room } from 'src/app/models/rooms/room.type';
import { MiniRoomComponent } from '../../rooms/mini-room/mini-room.component';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit {
  public castleName: string;
  public rooms: RoomWidget<any>[];

  constructor(
    private router: ActivatedRoute,
    private navCtrl: NavController,
    private roomRepo: RoomRepositoryService,
    private roomGridFactory: RoomGridFactoryService
  ) {}

  ngOnInit() {
    this.castleName = this.router.snapshot.paramMap.get('castleName');

    const _occupiedRooms = this.roomRepo.getAllOccupied();
    const _availableRooms = this.roomRepo.getAllFreeSpace();
    this.roomGridFactory.buildTransformer([
      ..._occupiedRooms,
      ..._availableRooms,
    ]);

    const occupiedRooms = _occupiedRooms.map((r: Room) => {
      const roomWidget = this.roomGridFactory.createRoomWidget(
        r,
        MiniRoomComponent
      );
      roomWidget.componentRef.instance.icon = r.icon;
      return roomWidget;
    });

    const availableRooms = _availableRooms.map((r: Room) => {
      const roomWidget = this.roomGridFactory.createRoomWidget(
        r,
        MiniRoomComponent
      );
      roomWidget.componentRef.instance.icon = `${r.location.x} ${r.location.y}`;
      return roomWidget;
    });

    this.rooms = occupiedRooms.concat(availableRooms);
  }

  onSelect(roomName: string) {}

  onSubmit() {
    // this.roomRepo.add();
  }
}
