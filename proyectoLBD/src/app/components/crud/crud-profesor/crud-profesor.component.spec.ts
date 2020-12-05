import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProfesorComponent } from './crud-profesor.component';

describe('CrudProfesorComponent', () => {
  let component: CrudProfesorComponent;
  let fixture: ComponentFixture<CrudProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
