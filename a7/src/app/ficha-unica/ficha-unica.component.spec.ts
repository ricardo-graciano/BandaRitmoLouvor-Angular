import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaUnicaComponent } from './ficha-unica.component';

describe('FichaUnicaComponent', () => {
  let component: FichaUnicaComponent;
  let fixture: ComponentFixture<FichaUnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaUnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaUnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
