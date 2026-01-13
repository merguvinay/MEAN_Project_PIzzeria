import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildUrPizza } from './build-ur-pizza';

describe('BuildUrPizza', () => {
  let component: BuildUrPizza;
  let fixture: ComponentFixture<BuildUrPizza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildUrPizza]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildUrPizza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
