import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SparklePage } from './events.page';

describe('SparklePage', () => {
  let component: SparklePage;
  let fixture: ComponentFixture<SparklePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SparklePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
