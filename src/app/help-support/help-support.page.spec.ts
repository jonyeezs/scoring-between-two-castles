import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpSupportPage } from './help-support.page';

describe('HelpSupportPage', () => {
  let component: HelpSupportPage;
  let fixture: ComponentFixture<HelpSupportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpSupportPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpSupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
