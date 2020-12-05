import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArchivoTutoriaComponent } from './crear-archivo-tutoria.component';

describe('CrearArchivoTutoriaComponent', () => {
  let component: CrearArchivoTutoriaComponent;
  let fixture: ComponentFixture<CrearArchivoTutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearArchivoTutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearArchivoTutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
