import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalClassroom, ModalClassroomComponent } from './modal-classroom.component';

describe ('Modal Classroom Component', () => {
  const data: ModalClassroom = {
    allData: {
      test: 'test',
      link: 'zoom-link'
    }
  };
  let component: ModalClassroomComponent;
  let fixture: ComponentFixture<ModalClassroomComponent>;
  beforeEach((async () => {
    TestBed.configureTestingModule({
      declarations: [
        ModalClassroomComponent
      ],
      imports: [
        MatDialogModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: data
        }
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ModalClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', (async () => {
    expect(component).toBeTruthy();
  }));
});
