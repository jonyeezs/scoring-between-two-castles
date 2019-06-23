import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniRoomComponent } from './mini-room.component';

describe('MiniRoomComponent', () => {
  let component: MiniRoomComponent;
  let fixture: ComponentFixture<MiniRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MiniRoomComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
