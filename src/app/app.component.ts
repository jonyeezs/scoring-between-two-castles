import { Component, OnInit } from '@angular/core';
import { get, set } from 'idb-keyval';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppUpdateService } from './core/app-update/app-update.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private appUpdater: AppUpdateService,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform
      .ready()
      .then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.appUpdater.runCheck();
      })
      .then(() => {
        return this.showIosInstallBanner();
      });
  }

  ngOnInit(): void {}

  showIosInstallBanner() {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () =>
      'standalone' in window.navigator && window.navigator['standalone'];

    // Show the banner once
    return get<boolean>('isIosa2hs')
      .then(isBannerShown => {
        // Checks if it should display install popup notification
        if (isIos() && !isInStandaloneMode() && isBannerShown === undefined) {
          return this.toastController.create({
            showCloseButton: true,
            closeButtonText: 'OK',
            position: 'bottom',
            message: `To install the app, tap "Share" icon below and select "Add to Home Screen".`,
          });
        } else {
          return undefined;
        }
      })
      .then((toaster: HTMLIonToastElement) => {
        if (!!toaster) {
          set('isIosa2hs', true);
          return (toaster as HTMLIonToastElement).present();
        }
      });
  }
}
