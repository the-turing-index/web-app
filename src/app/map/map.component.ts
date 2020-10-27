import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


import { Get } from './get.model';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  loadedData: Get[] = [];

  constructor(private http: HttpClient) {
 

   }

  ngOnInit(): void {
    // this.fetchData();
  }

  // onFetchData(): void {
  //   this.fetchData();
  // }

  // private fetchData(): void {
  //   this.http
  //     .get<{ [key: string]: Get}>('url')
  //     .pipe(map((responseData: {[key: string]: Get }) => {
  //       const dataArray: Get[] = [];
  //       for (const key in  responseData) {
  //         if (responseData.hasOwnProperty(key)) {
  //           dataArray.push({ ...responseData[key] , id: key })
  //         }
  //       }
  //       return dataArray;
  //     }))
  //     .subscribe(response => {
  //       console.log(response);
  //       this.loadedData = response;
  //       console.log(this.loadedData);
  //   });
  // }
}
