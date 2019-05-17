import { Component, OnInit } from '@angular/core';
import { RoomRepositoryService } from 'src/app/core/room-repository.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RoomWidget } from '../../castle-layout/room-to-grid/room-widget.type';
@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit {
  public castleName: string;
  public rooms: RoomWidget<any>[];
  constructor(private router: ActivatedRoute, private roomRepo: RoomRepositoryService, private navCtrl: NavController) { }

  ngOnInit() {
    this.castleName = this.router.snapshot.paramMap.get('castleName');
    this.rooms = [];
  }

  onSelect(roomName: string) {
  }

  onSubmit() {
    // this.roomRepo.add();
  }
}
