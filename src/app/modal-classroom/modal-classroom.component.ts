import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface ModalClassroom {
  animal: 'panda' | 'unicorn' | 'lion';
}
// /**
//  * @title Injecting data when opening a dialog
//  */
@Component({
  selector: 'modal-classroom',
  templateUrl: './modal-classroom.component.html',
  styleUrls: ['./modal-classroom.component.scss']
})
export class ModalClassroomComponent {
  constructor(public dialog: MatDialog) { }
  openDialog() {
    console.log('derp')
    this.dialog.open(ModalClassroomDialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
}
@Component({
  selector: 'modal-classroom-dialog',
  templateUrl: 'modal-classroom-dialog.component.html',
})
export class ModalClassroomDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalClassroom) { }
}
