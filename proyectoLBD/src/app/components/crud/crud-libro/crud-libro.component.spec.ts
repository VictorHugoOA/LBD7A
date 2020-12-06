import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLibroComponent } from './crud-libro.component';

describe('CrudLibroComponent', () => {
  let component: CrudLibroComponent;
  let fixture: ComponentFixture<CrudLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
