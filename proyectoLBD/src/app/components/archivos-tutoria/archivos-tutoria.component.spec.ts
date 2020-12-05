import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivosTutoriaComponent } from './archivos-tutoria.component';

describe('ArchivosTutoriaComponent', () => {
  let component: ArchivosTutoriaComponent;
  let fixture: ComponentFixture<ArchivosTutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivosTutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivosTutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
