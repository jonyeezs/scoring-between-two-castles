import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FabbyConnectorService } from './fabby-connector.service';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fabby',
  templateUrl: './fabby.component.html',
  styleUrls: ['./fabby.component.scss'],
})
export class FabbyComponent implements OnInit {
  public canShow$: Observable<boolean>;
  public name: string;

  constructor(private route: ActivatedRoute, private fabbyConnector: FabbyConnectorService, private navCtrl: NavController) {}

  ngOnInit() {
    this.canShow$ = this.fabbyConnector.showFabby$;
    this.name = this.fabbyConnector.currentCastle;
  }

  public navigateToAddRoom() {
    this.navCtrl.navigateForward(['add' , 'room', { castleName: this.name }], { relativeTo: this.route });
  }
}
