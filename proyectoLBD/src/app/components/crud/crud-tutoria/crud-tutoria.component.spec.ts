import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTutoriaComponent } from './crud-tutoria.component';

describe('CrudTutoriaComponent', () => {
  let component: CrudTutoriaComponent;
  let fixture: ComponentFixture<CrudTutoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudTutoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
