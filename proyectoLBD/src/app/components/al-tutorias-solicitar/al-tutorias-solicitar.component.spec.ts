import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlTutoriasSolicitarComponent } from './al-tutorias-solicitar.component';

describe('AlTutoriasSolicitarComponent', () => {
  let component: AlTutoriasSolicitarComponent;
  let fixture: ComponentFixture<AlTutoriasSolicitarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlTutoriasSolicitarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlTutoriasSolicitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
