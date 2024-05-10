import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EveningPage } from './evening.page';

describe('EveningPage', () => {
  let component: EveningPage;
  let fixture: ComponentFixture<EveningPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EveningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
