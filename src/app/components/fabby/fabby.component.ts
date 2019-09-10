import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FabbyConnectorService } from './fabby-connector.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fabby',
  templateUrl: './fabby.component.html',
  styleUrls: ['./fabby.component.scss'],
})
export class FabbyComponent implements OnInit {
  canShow$: Observable<boolean>;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private fabbyConnector: FabbyConnectorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.canShow$ = this.fabbyConnector.showFabby$;
    this.name = this.fabbyConnector.currentCastle;
  }

  navigateToAddRoom() {
    this.router.navigate(['add', 'room', { castleName: this.name }], {
      relativeTo: this.route,
      skipLocationChange: true,
    });
  }
}
