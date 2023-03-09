import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelSampleComponent } from './ng-model-sample.component';

describe('NgModelSampleComponent', () => {
  let component: NgModelSampleComponent;
  let fixture: ComponentFixture<NgModelSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgModelSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModelSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
