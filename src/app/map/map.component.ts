import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


import { Get } from './get.model';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  loadedData = [];

  constructor() {
   }

  ngOnInit(): void {
      // this.fetchData();
  }

  onClicky(): void {
    console.log('hello');
  }

  // onFetchData(): void {
  //   this.fetchData();
  // }

  // private fetchData(): void {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/todos/2')
  //     .pipe(map((responseData) => {
  //       const dataArray = [];
  //       for (const key in  responseData) {
  //         if (responseData.hasOwnProperty(key)) {
  //           dataArray.push(responseData);
  //         }
  //       }
  //       return dataArray;
  //     }))
  //     .subscribe(response => {
  //       this.loadedData = response;
  //       console.log(this.loadedData);
  //   });
  // }
}
