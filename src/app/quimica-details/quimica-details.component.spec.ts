import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuimicaDetailsComponent } from './quimica-details.component';

describe('QuimicaDetailsComponent', () => {
  let component: QuimicaDetailsComponent;
  let fixture: ComponentFixture<QuimicaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuimicaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuimicaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
