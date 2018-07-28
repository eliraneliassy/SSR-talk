import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageItemComponent } from './search-page-item.component';

describe('SearchPageItemComponent', () => {
  let component: SearchPageItemComponent;
  let fixture: ComponentFixture<SearchPageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
