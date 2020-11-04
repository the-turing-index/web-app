import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { queueScheduler } from 'rxjs';
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

  openDialog(): void {
    this.dialog.open(ModalClassroomDialogComponent, {
      data: {
        allData: this.loadedData
      }
    });
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
