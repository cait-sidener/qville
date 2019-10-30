import { Component, OnInit } from '@angular/core';
import { Counties } from '../../components/intensities/counties';

@Component({
  selector: 'app-rainfall',
  templateUrl: './rainfall.component.html',
  styleUrls: ['./rainfall.component.css']
})
export class RainfallComponent implements OnInit {

  counties:Counties[];
  countSelected: any;
  showTables: boolean = false;

  constructor() { }

  ngOnInit() {
    this.counties= [
      { Id: 1, Name: "" },
      { Id: 2, Name: "ALLEN" },
      { Id: 3, Name: "ANDERSON" },
      { Id: 4, Name: "ATCHISON" },
      { Id: 5, Name: "BARBER" },
      { Id: 6, Name: "BARTON" },
      { Id: 7, Name: "BOURBON" },
      { Id: 8, Name: "BROWN" },
      { Id: 9, Name: "BUTLER" },
      { Id: 10, Name: "CHASE" },
      { Id: 11, Name: "CHAUTAUQUA" },
      { Id: 12, Name: "CHEROKEE" },
      { Id: 13, Name: "CHEYENNE" },
      { Id: 14, Name: "CLARK" },
      { Id: 15, Name: "CLOUD" },
      { Id: 16, Name: "COFFEE" },
      { Id: 17, Name: "COMANCHE" }
    ]
  }

  onCountSelected(event: string) {
    this.showTables = event !== "1"
  }
}
