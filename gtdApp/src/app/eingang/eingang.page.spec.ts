import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EingangPage } from './eingang.page';

describe('EingangPage', () => {
  let component: EingangPage;
  let fixture: ComponentFixture<EingangPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EingangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
