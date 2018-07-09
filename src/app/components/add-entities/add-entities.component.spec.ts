import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntitiesComponent } from './add-entities.component';

describe('AddEntitiesComponent', () => {
  let component: AddEntitiesComponent;
  let fixture: ComponentFixture<AddEntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEntitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
