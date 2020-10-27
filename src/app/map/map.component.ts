import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private http: HttpClient) {

   }

  ngOnInit(): void {
  }

  fetchData() {
    this.http.get('url')
  }

}
