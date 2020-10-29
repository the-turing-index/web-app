
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core'

@NgModule({
  exports: [
    MatButtonModule,
    MatDialogModule,
  ]
})
export class MaterialModule { }
