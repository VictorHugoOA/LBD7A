import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbarComponent } from './pbar.component';

describe('PbarComponent', () => {
  let component: PbarComponent;
  let fixture: ComponentFixture<PbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
