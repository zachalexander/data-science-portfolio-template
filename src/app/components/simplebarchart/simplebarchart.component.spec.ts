import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplebarchartComponent } from './simplebarchart.component';

describe('SimplebarchartComponent', () => {
  let component: SimplebarchartComponent;
  let fixture: ComponentFixture<SimplebarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplebarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplebarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
