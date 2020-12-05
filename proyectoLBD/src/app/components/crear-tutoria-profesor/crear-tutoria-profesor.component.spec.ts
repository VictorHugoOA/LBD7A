import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTutoriaProfesorComponent } from './crear-tutoria-profesor.component';

describe('CrearTutoriaProfesorComponent', () => {
  let component: CrearTutoriaProfesorComponent;
  let fixture: ComponentFixture<CrearTutoriaProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTutoriaProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTutoriaProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
