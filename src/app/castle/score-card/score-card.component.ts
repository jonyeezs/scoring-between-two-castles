import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RoomRepositoryService } from '@app/core/room-repo/room-repository.service';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-score-card',
  template: `
    <ion-card>
      <ion-card-header>
        <ion-card-subtitle>Score</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <div id="score-pts" class="text-5xl font-semibold"></div>
      </ion-card-content>
    </ion-card>
  `,
  styleUrls: ['./score-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreCardComponent implements OnInit, AfterViewInit, OnDestroy {
  private calculateSubscription: Subscription;
  private points = 0;
  @Input() calculateAction: Observable<void>;
  countUp: CountUp;

  constructor(private roomRepo: RoomRepositoryService) {}

  ngOnInit() {
    this.calculateSubscription = this.calculateAction.subscribe(() => {
      this.points = this.roomRepo.getAllOccupied().reduce((total, r) => {
        return (
          total +
          r.sections.reduce((stotal, s) => {
            return stotal + this.roomRepo.calculatePoints({ x: s.x, y: s.y });
          }, 0)
        );
      }, 0);

      this.countUp.update(this.points);
    });
  }

  ngAfterViewInit(): void {
    this.countUp = new CountUp('score-pts', 0, {
      smartEasingThreshold: 4,
      smartEasingAmount: 1,
    });
  }

  ngOnDestroy(): void {
    this.calculateSubscription && this.calculateSubscription.unsubscribe();
  }
}
