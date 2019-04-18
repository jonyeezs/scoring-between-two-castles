import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-castle-page',
  templateUrl: './castle-page.component.html',
  styleUrls: ['./castle-page.component.scss']
})
export class CastlePageComponent implements OnInit {
  public name: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
  }

}
