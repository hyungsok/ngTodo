import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-view.dialog',
  templateUrl: './view.dialog.component.html',
  styleUrls: ['./view.dialog.component.scss']
})
export class ViewDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
