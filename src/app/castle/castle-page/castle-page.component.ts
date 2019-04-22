import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FabbyConnectorService } from '../../components/fabby/fabby-connector.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-castle-page',
  templateUrl: './castle-page.component.html',
  styleUrls: ['./castle-page.component.scss']
})
export class CastlePageComponent implements OnInit {
  public name: string;
  public rooms = [];
  constructor(private route: ActivatedRoute,
    private fabby: FabbyConnectorService, private navCtrl: NavController) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');

    if (this.rooms.length === 0) {
      this.fabby.hide();
    } else {
      this.fabby.show();
    }
  }

  goToAddThrone() {
    this.navCtrl.navigateForward(['add' , 'throne'], { relativeTo: this.route });
  }
}
