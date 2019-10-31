import {Component, ViewChild, Input } from '@angular/core';
import { IntensitiesService } from '../../services/intensities.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import  { Observable } from 'rxjs';

@Component({
  selector: 'app-intensities',
  templateUrl: './intensities.component.html',
  styleUrls: ['./intensities.component.css']
})
export class IntensitiesComponent {
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
  displayedColumns = ['duration', 'yearOne', 'yearTwo', 'yearFive', 'yearTen', 'yearTwentyfive', 'yearFifty', 'yearHundred'];

  constructor(private intensitiesService: IntensitiesService) {}

  resetData() {
    this.intensitiesService.getSites().subscribe(results => {
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
