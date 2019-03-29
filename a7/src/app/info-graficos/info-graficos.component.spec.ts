import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGraficosComponent } from './info-graficos.component';

describe('InfoGraficosComponent', () => {
  let component: InfoGraficosComponent;
  let fixture: ComponentFixture<InfoGraficosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGraficosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
