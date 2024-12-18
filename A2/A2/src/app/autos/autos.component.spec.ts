/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AutosComponent } from './Autos.component';

describe('AutosComponent', () => {
  let component: AutosComponent;
  let fixture: ComponentFixture<AutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
