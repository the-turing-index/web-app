import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalClassroomComponent } from './modal-classroom.component';


describe('ModalClassroomComponent', () => {
  let component: ModalClassroomComponent;
  let fixture: ComponentFixture<ModalClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalClassroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
