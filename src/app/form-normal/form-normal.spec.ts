import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNormal } from './form-normal';

describe('FormNormal', () => {
  let component: FormNormal;
  let fixture: ComponentFixture<FormNormal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNormal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNormal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
