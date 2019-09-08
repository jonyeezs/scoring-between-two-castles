import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/rooms/room.type';
import { RoomRepositoryService } from '@app/core/room-repo/room-repository.service';
import { ActivatedRoute, Router } from '@angular/router';
import { thrones } from '@app/rooms/thrones';
@Component({
  selector: 'app-add-throne',
  templateUrl: './add-throne.page.html',
  styleUrls: ['./add-throne.page.scss'],
})
export class AddThronePage implements OnInit {
  castleName: string;
  selectedThrone: Partial<Room>;
  thrones = thrones;

  constructor(
    private route: ActivatedRoute,
    private roomRepo: RoomRepositoryService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.castleName = this.route.snapshot.paramMap.get('castleName');
    this.selectedThrone = { name: 'Throne Room', icon: '👑' };
  }

  onSelect(roomName: string) {
    this.selectedThrone = this.thrones.find(t => t.name === roomName);
  }

  onSubmit() {
    this.roomRepo.add(this.selectedThrone as Room);

    this.router.navigate(['castle', this.castleName], {
      skipLocationChange: true,
    });
  }
}
