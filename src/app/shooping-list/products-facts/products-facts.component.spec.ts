import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFactsComponent } from './products-facts.component';

describe('ProductsFactsComponent', () => {
  let component: ProductsFactsComponent;
  let fixture: ComponentFixture<ProductsFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
