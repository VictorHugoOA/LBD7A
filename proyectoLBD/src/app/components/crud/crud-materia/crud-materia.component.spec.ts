import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMateriaComponent } from './crud-materia.component';

describe('CrudMateriaComponent', () => {
  let component: CrudMateriaComponent;
  let fixture: ComponentFixture<CrudMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
