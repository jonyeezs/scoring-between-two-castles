import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastlePageComponent } from './castle-page.component';
import { CastleLayoutModule } from '../castle-layout/castle-layout.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('CastlePageComponent', () => {
  let component: CastlePageComponent;
  let fixture: ComponentFixture<CastlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CastleLayoutModule, RouterTestingModule.withRoutes([])],
      declarations: [CastlePageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: name => of(name) } } },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
