import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAlumnoComponent } from './crud-alumno.component';

describe('CrudAlumnoComponent', () => {
  let component: CrudAlumnoComponent;
  let fixture: ComponentFixture<CrudAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
