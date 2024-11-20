import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelegierenPage } from './delegieren.page';

describe('DelegierenPage', () => {
  let component: DelegierenPage;
  let fixture: ComponentFixture<DelegierenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegierenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
