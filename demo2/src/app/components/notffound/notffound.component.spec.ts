import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOTFFOUNDComponent } from './notffound.component';

describe('NOTFFOUNDComponent', () => {
  let component: NOTFFOUNDComponent;
  let fixture: ComponentFixture<NOTFFOUNDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NOTFFOUNDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NOTFFOUNDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
