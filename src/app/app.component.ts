import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public title;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
  ) {
    this.initializeApp();
  }
 
  initializeApp() {
    this.title = 'Scoring between two Castles'
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof ActivationEnd),
      filter((e: ActivationEnd) => !!e.snapshot.data.title)
    ).subscribe((e: ActivationEnd) => this.title = e.snapshot.data.title);
  }
}
