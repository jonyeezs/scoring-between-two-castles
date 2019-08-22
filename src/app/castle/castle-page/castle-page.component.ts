import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FabbyConnectorService } from '../../components/fabby/fabby-connector.service';
import { NavController } from '@ionic/angular';
import { RoomRepositoryService } from 'src/app/core/room-repository.service';

import { Room } from 'src/app/models/rooms/room.type';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-castle-page',
  templateUrl: './castle-page.component.html',
  styleUrls: ['./castle-page.component.scss'],
})
export class CastlePageComponent implements OnInit {
  name: string;
  rooms: Room[] = [];
  scoreCardCalculate$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private fabby: FabbyConnectorService,
    private navCtrl: NavController,
    private roomRepo: RoomRepositoryService
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.fabby.currentCastle = this.name;
  }

  ionViewWillEnter() {
    this.rooms = this.roomRepo.getAllOccupied();

    this.scoreCardCalculate$.next();

    if (this.rooms.length === 0) {
      this.fabby.hide();
    } else {
      this.fabby.show();
    }
  }

  goToAddThrone() {
    this.navCtrl.navigateForward(['add', 'throne', { castleName: this.name }], {
      relativeTo: this.route,
    });
  }
}
