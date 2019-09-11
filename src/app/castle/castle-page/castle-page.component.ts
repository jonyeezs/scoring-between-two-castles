import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FabbyConnectorService } from '../../components/fabby/fabby-connector.service';
import { RoomRepositoryService } from '@app/core/room-repo/room-repository.service';

import { Room } from 'src/app/models/rooms/room.type';

import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-castle-page',
  templateUrl: './castle-page.component.html',
  styleUrls: ['./castle-page.component.scss'],
})
export class CastlePageComponent implements OnInit, OnDestroy {
  name: string;
  rooms: Room[] = [];
  scoreCardCalculate$ = new Subject();
  occupiedRoomsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private fabby: FabbyConnectorService,
    private router: Router,
    private roomRepo: RoomRepositoryService
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.fabby.currentCastle = this.name;
    this.occupiedRoomsSubscription = this.roomRepo.occupiedChanges.subscribe(
      rooms => {
        this.rooms = rooms;

        if (this.rooms.length === 0) {
          this.fabby.hide();
        } else {
          this.fabby.show();
        }
      }
    );
  }
  ngOnDestroy(): void {
    this.occupiedRoomsSubscription.unsubscribe();
  }

  ionViewWillEnter() {
    this.scoreCardCalculate$.next();
  }

  goToAddThrone() {
    this.router.navigate(['add', 'throne', { castleName: this.name }], {
      relativeTo: this.route,
      skipLocationChange: true,
    });
  }

  onReset() {
    this.roomRepo.clear();
  }
}
