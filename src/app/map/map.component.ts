import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { ModalClassroomDialogComponent } from '../modal-classroom/modal-classroom.component';
// import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  loadedData = {};
  mod1FrontEndButton = document.querySelector('#feM1');

  constructor(public dialog: MatDialog) {

   }

  ngOnInit(): void {
    this.onFetchData();
  }

  openDialog(title?: string, zoomLink?: string, description?: string, lessonLink?: string): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      title: title,
      link: zoomLink,
      description: description,
      lesson: lessonLink
    }

    this.dialog.open(ModalClassroomDialogComponent, dialogConfig);
  }

  onFetchData(): void {
    this.fetchData();
  }

  private fetchData(): void {
    fetch('http://localhost:8000/api/v1/calendars')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.loadedData = data;
      console.log(this.loadedData);
    });
  }
}
