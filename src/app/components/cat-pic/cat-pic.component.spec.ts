import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPicComponent } from './cat-pic.component';

describe('CatPicComponent', () => {
  let component: CatPicComponent;
  let fixture: ComponentFixture<CatPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
