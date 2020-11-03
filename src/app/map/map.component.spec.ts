import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MapComponent } from './map.component';

import { ModalClassroom } from '../modal-classroom/modal-classroom.component';

describe('Map Component', () => {
    
  const data: ModalClassroom = {
    allData: {
      test: 'test',
      link: 'zoom-link'
    }
  };
    
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
    
  beforeEach((async() => {
    TestBed.configureTestingModule({
      declarations: [
        MapComponent
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
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
    
  // it('should be created', (() => {
  //   expect(component).toBeTruthy();
  // }));

});
