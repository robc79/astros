import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftListComponent } from './craft-list.component';

describe('CraftListComponent', () => {
  let component: CraftListComponent;
  let fixture: ComponentFixture<CraftListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CraftListComponent]
    });
    fixture = TestBed.createComponent(CraftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
