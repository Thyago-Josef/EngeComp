import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatematicaDetailsComponent } from './matematica-details.component';

describe('MatematicaDetailsComponent', () => {
  let component: MatematicaDetailsComponent;
  let fixture: ComponentFixture<MatematicaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatematicaDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatematicaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
