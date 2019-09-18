import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-help-support',
  templateUrl: './help-support.page.html',
  styleUrls: ['./help-support.page.scss'],
})
export class HelpSupportPage implements OnInit {
  params: Params;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.params = this.route.snapshot.params;
  }
}
