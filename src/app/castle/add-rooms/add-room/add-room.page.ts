import { Component, OnInit } from '@angular/core';
import { RoomRepositoryService } from 'src/app/core/room-repository.service';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/models/rooms/room.type';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit {
  public castleName: string;
  public rooms: Room[];

  constructor(
    private router: ActivatedRoute,
    private roomRepo: RoomRepositoryService
  ) {}

  ngOnInit() {
    this.castleName = this.router.snapshot.paramMap.get('castleName');

    this.rooms = [
      ...this.roomRepo.getAllOccupied(),
      ...this.roomRepo.getAllFreeSpace(),
    ];
  }

  onSelect() {}

  onSubmit() {
    // this.roomRepo.add();
  }
}
