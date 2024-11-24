import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EinstellungPage } from './einstellung.page';

describe('EinstellungPage', () => {
  let component: EinstellungPage;
  let fixture: ComponentFixture<EinstellungPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EinstellungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
