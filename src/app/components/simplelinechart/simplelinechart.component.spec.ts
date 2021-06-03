import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplelinechartComponent } from './simplelinechart.component';

describe('SimplelinechartComponent', () => {
  let component: SimplelinechartComponent;
  let fixture: ComponentFixture<SimplelinechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplelinechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplelinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
