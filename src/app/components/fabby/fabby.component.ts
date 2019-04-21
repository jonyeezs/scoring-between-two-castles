import { Component, OnInit } from '@angular/core';
import { FabbyConnectorService } from './fabby-connector.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fabby',
  templateUrl: './fabby.component.html',
  styleUrls: ['./fabby.component.scss'],
})
export class FabbyComponent implements OnInit {
  public canShow$: Observable<boolean>;

  constructor(private fabbyConnector: FabbyConnectorService) {}

  ngOnInit() {
    this.canShow$ = this.fabbyConnector.showFabby$;
  }
}
