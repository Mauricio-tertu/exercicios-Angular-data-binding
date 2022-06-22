import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloDeColaboradoresComponent } from './modulo-de-colaboradores.component';

describe('ModuloDeColaboradoresComponent', () => {
  let component: ModuloDeColaboradoresComponent;
  let fixture: ComponentFixture<ModuloDeColaboradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloDeColaboradoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloDeColaboradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
