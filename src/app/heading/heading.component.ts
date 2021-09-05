import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  title = '../../assets/img/turingIndexTitle.svg';
  logo = '../../assets/img/turingIndexLogo.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
