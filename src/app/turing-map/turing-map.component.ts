import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turing-map',
  templateUrl: './turing-map.component.html',
  styleUrls: ['./turing-map.component.scss']
})
export class TuringMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onlick(): void {
    console.log('derp')
  }

}
