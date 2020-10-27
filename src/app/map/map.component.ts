import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private http: HttpClient) {
    loadedData = [];

   }

  ngOnInit(): void {
    this.fetchData();
  }

  onFetchData() {
    this.fetchData();
  }

  private fetchData() {
    this.http
      .get('url')
      .pipe(map((responseData: {[key: string]: }) => {
        const dataArray = [];
        for (const key in  responseData) {
          if (responseData.hasOwnProperty(key)) {
            dataArray.push({ ...responseData[key] , id: key })
          }
        }
        return dataArray;
      }))
      .subscribe(response => {
        console.log(response);
    });
  }
}
