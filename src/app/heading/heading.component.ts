import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  title: string = "Turing Index";
  logo: string = "../../assets/img/turingLogo.png";
  constructor() { }

  ngOnInit(): void {
  }

}
