import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalClassroomDialogComponent } from '../modal-classroom/modal-classroom.component';
// import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  loadedData = {};

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
    fetch('http://localhost:8000/calendars')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.loadedData = data.data.attributes;
      console.log(this.loadedData);
    });
  }
}

@Component({
  selector: 'app-button',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  styles: ['a { color: red; }']
})
export class ModClassButton {

}