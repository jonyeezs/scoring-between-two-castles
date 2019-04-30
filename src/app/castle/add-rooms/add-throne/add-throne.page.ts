import { Component, OnInit } from '@angular/core';
import { thrones } from '../../../models/thrones/thrones.class';
import { Room } from 'src/app/models/rooms/room.type';
import { RoomRepositoryService } from 'src/app/core/room-repository.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-throne',
  templateUrl: './add-throne.page.html',
  styleUrls: ['./add-throne.page.scss'],
})
export class AddThronePage implements OnInit {
  public castleName: string;
  public selectedThrone: Partial<Room>;
  public thrones = thrones;
  constructor(private router: ActivatedRoute, private roomRepo: RoomRepositoryService, private navCtrl: NavController) { }

  ngOnInit() {
    this.castleName = this.router.snapshot.paramMap.get('castleName');
    this.selectedThrone = { name: 'Throne Room', icon: '👑' };
  }

  onSelect(roomName: string) {
    this.selectedThrone = this.thrones.find(t => t.name === roomName);
  }

  onSubmit() {
    this.roomRepo.add(this.selectedThrone as Room);

    this.navCtrl.navigateBack(['castle', this.castleName]);
  }
}
