import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroMateriasComponent } from './maestro-materias.component';

describe('MaestroMateriasComponent', () => {
  let component: MaestroMateriasComponent;
  let fixture: ComponentFixture<MaestroMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
