import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-fabby',
  templateUrl: './fabby.component.html',
  styleUrls: ['./fabby.component.scss'],
})
export class FabbyComponent implements OnInit {
  public isCastlePage: boolean;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.url.pipe(map(segments => segments.join('')))
    .subscribe((url) => {
      this.isCastlePage = url === 'castles';
    });
  }

}
