import {Component, ViewChild, Input} from '@angular/core';
import { IntensitiesThirteenService } from '../../services/intensities-thirteen.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-intensities-thirteen',
  templateUrl: './intensities-thirteen.component.html',
  styleUrls: ['./intensities-thirteen.component.css']
})
export class IntensitiesThirteenComponent {
  _countyId: number = 1;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @Input()
  set countyId(countyId: number) {
    this._countyId = countyId || 1;
    this.resetData();
  }
  get countyId() {
    return this._countyId;
  }

  dataSource;
  displayedColumns = ['duration', 'yearOne', 'yearTwo', 'yearFive', 'yearTen', 'yearTwentyfive', 'yearFifty', 'yearHundred', 'yearTwohundred', 'yearFivehundred'];

  constructor(private intensitiesThirteenService: IntensitiesThirteenService) {}

  resetData() {
    this.intensitiesThirteenService.getSites().subscribe(results => {
    if(!results) {
      return;
    }
    this.dataSource = new MatTableDataSource(results);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  })
  console.log(this.countyId);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
