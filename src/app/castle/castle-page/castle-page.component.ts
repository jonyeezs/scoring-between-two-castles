import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FabbyConnectorService } from '../../components/fabby/fabby-connector.service';
import { NavController } from '@ionic/angular';
import { RoomRepositoryService } from 'src/app/core/room-repository.service';

import { RoomWidget } from '../castle-layout/room-to-grid/room-widget.type';
import { MiniRoomComponent } from '../rooms/mini-room/mini-room.component';
import { RoomGridFactoryService } from '../castle-layout/room-to-grid/room-grid-factory/room-grid-factory.service';
import { RoomToGridTransformer } from '../castle-layout/room-to-grid/room-to-grid-transformer/room-to-grid-transformer';
import { Room } from 'src/app/models/rooms/room.type';

@Component({
  selector: 'app-castle-page',
  templateUrl: './castle-page.component.html',
  styleUrls: ['./castle-page.component.scss']
})
export class CastlePageComponent implements OnInit {
  public name: string;
  public rooms: RoomWidget<any>[] = [];
  constructor(private route: ActivatedRoute,
    private fabby: FabbyConnectorService, private navCtrl: NavController,
    private roomRepo: RoomRepositoryService,
    private roomGridFactory: RoomGridFactoryService) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  ionViewWillEnter() {
    const rooms = this.roomRepo.getAll();
    this.roomGridFactory.buildTransformer(rooms);
    this.rooms = rooms.map((r: Room) => {
      const roomWidget = this.roomGridFactory.createRoomWidget(r, MiniRoomComponent);
      roomWidget.componentRef.instance.icon = r.icon;
      return roomWidget;
    });
    if (this.rooms.length === 0) {
      this.fabby.hide();
    } else {
      this.fabby.show();
    }
  }

  goToAddThrone() {
    this.navCtrl.navigateForward(['add' , 'throne', { castleName: this.name }], { relativeTo: this.route });
  }
}
