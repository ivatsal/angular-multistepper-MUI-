import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFormsComponent } from './multi-forms.component';

describe('MultiFormsComponent', () => {
  let component: MultiFormsComponent;
  let fixture: ComponentFixture<MultiFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
