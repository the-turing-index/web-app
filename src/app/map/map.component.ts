import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalClassroomDialogComponent } from '../modal-classroom/modal-classroom.component';
import { frontEndMod1, frontEndMod2, frontEndMod3, backEndMod1, backEndMod2, backEndMod3, module4, community, kitchen } from '../../shared/DemoData';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  loadedData = {};
  frontEndMod1 = frontEndMod1;
  frontEndMod2 = frontEndMod2;
  frontEndMod3 = frontEndMod3;
  backEndMod1 = backEndMod1;
  backEndMod2 = backEndMod2;
  backEndMod3 = backEndMod3;
  module4 = module4;
  community = community;
  kitchen = kitchen;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.onFetchData();
  }

  onFetchData(): void {
    this.fetchData();
  }

  private fetchData(): void {
    fetch('https://fast-depths-29900.herokuapp.com/api/v1/calendars')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.loadedData = data;
      console.log(this.loadedData);
    });
  }

  openDialog(title?: string, description?: string, date?: string, start?: string, end?: string, zoomLink?: string, lessonPlan?: string): void {
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
