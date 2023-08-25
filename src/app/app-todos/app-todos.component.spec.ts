import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTodosComponent } from './app-todos.component';

describe('AppTodosComponent', () => {
  let component: AppTodosComponent;
  let fixture: ComponentFixture<AppTodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppTodosComponent]
    });
    fixture = TestBed.createComponent(AppTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
