import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitemComponent } from './titem.component';

describe('TitemComponent', () => {
  let component: TitemComponent;
  let fixture: ComponentFixture<TitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
