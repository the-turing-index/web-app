import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface ModalClassroom {
  allData: any;
}

@Component({
  selector: 'app-modal-classroom',
  templateUrl: './modal-classroom.component.html',
  styleUrls: ['./modal-classroom.component.scss']
})
export class ModalClassroomComponent {

  constructor(public dialog: MatDialog) {
  }
  // openDialog(config: object): void {
  //   this.dialog.open(ModalClassroomDialogComponent, config);
  // }
}

@Component({
  selector: 'app-modal-classroom-dialog',
  templateUrl: 'modal-classroom-dialog.component.html',
  styleUrls: ['./modal-classroom.component.scss']
})
export class ModalClassroomDialogComponent {
  dataStuff = this.data

  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalClassroom) { }
}
