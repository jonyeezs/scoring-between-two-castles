import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreCardComponent } from './score-card.component';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';

describe('ScoreCardComponent', () => {
  let component: ScoreCardComponent;
  let fixture: ComponentFixture<ScoreCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
      declarations: [ScoreCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreCardComponent);
    component = fixture.componentInstance;
    component.calculateAction = of();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
