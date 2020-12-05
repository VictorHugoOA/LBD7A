import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfeTutoriaComponent } from './profe-tutoria.component';

describe('ProfeTutoriaComponent', () => {
  let component: ProfeTutoriaComponent;
  let fixture: ComponentFixture<ProfeTutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfeTutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfeTutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
