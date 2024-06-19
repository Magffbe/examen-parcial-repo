import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostFirestorePage } from './post-firestore.page';

describe('PostFirestorePage', () => {
  let component: PostFirestorePage;
  let fixture: ComponentFixture<PostFirestorePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFirestorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
