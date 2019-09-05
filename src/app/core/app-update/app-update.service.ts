import { Injectable, ApplicationRef } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AlertController } from '@ionic/angular';
import { concatMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppUpdateService {
  constructor(
    appRef: ApplicationRef,
    private updater: SwUpdate,
    public alertController: AlertController
  ) {
    if (this.updater.isEnabled) {
      appRef.isStable
        .pipe(
          first(isStable => isStable === true),
          concatMap(() => this.updater.available)
        )
        .subscribe(() => {
          this.presentUpdate().then();
        });
    }
  }

  runCheck() {
    if (this.updater.isEnabled) {
      this.updater.checkForUpdate().then();
    }
  }

  private async presentUpdate() {
    const alert = await this.alertController.create({
      header: 'Update available!',
      message: 'Small improvements and fixes coming your way! 👍',
      buttons: [
        {
          text: 'Update',
          handler: () => {
            window.location.reload();
          },
        },
      ],
    });

    await alert.present();
  }
}
