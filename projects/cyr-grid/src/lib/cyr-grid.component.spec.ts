import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyrGridComponent } from './cyr-grid.component';

describe('CyrGridComponent', () => {
  let component: CyrGridComponent;
  let fixture: ComponentFixture<CyrGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CyrGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CyrGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
