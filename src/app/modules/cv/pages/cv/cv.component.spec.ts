import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvComponent } from './cv.component';
import {By} from "@angular/platform-browser";

describe('CvComponent', () => {
  let component: CvComponent;
  let fixture: ComponentFixture<CvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create items in the form box', () => {
    component.list.map((item) => {
      expect(fixture.debugElement.query(By.css(`#form-box-item-${item.id}`))).toBeTruthy();
    })

  });

});
