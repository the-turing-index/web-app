import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalClassroomDialogComponent } from '../modal-classroom/modal-classroom.component';
import { frontEndMod1, frontEndMod2, frontEndMod3, backEndMod1, backEndMod2, backEndMod3, module4, community, kitchen } from '../../shared/DemoData';

export interface LessonDetails {
  title?: string;
  description?: string;
  date?: string;
  start?: string;
  end?: string;
  zoomLink?: string;
  lessonPlan?: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  loadedData = {};
  frontEndMod1: LessonDetails = frontEndMod1;
  frontEndMod: LessonDetails = frontEndMod2;
  frontEndMod3: LessonDetails = frontEndMod3;
  backEndMod1: LessonDetails = backEndMod1;
  backEndMod2: LessonDetails = backEndMod2;
  backEndMod3: LessonDetails = backEndMod3;
  module4: LessonDetails = module4;
  community: LessonDetails = community;
  kitchen: LessonDetails = kitchen;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.onFetchData();
  }

  onFetchData(): void {
    this.fetchData();
  }

  private fetchData(): void {
    fetch('https://fast-depths-29900.herokuapp.com/api/v1/calendars')
    .then((response: Response): Promise<any> => {
      return response.json();
    })
    .then((data) => {
      this.loadedData = data;
      console.log(this.loadedData);
    });
  }

  openDialog(
    title?: string,
    description?: string,
    date?: string,
    start?: string,
    end?: string,
    zoomLink?: string,
    lessonPlan?: string
    ): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      title,
      description,
      zoomLink,
      lessonPlan,
      date,
      start,
      end
    };
    this.dialog.open(ModalClassroomDialogComponent, dialogConfig);
  }
}
