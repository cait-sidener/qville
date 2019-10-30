import {Component, ViewChild, OnInit} from '@angular/core';
import { IntensitiesThirteenService } from '../../services/intensities-thirteen.service';
import {MatPaginator, MatSort, MatSortable, MatTableDataSource} from '@angular/material';
import  { Observable } from 'rxjs';
@Component({
  selector: 'app-intensities-thirteen',
  templateUrl: './intensities-thirteen.component.html',
  styleUrls: ['./intensities-thirteen.component.css']
})
export class IntensitiesThirteenComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource;
  displayedColumns = ['duration', 'yearOne', 'yearTwo', 'yearFive', 'yearTen', 'yearTwentyfive', 'yearFifty', 'yearHundred', 'yearTwohundred', 'yearFivehundred'];

  constructor(private intensitiesThirteenService: IntensitiesThirteenService) {}

  ngOnInit() {
    this.intensitiesThirteenService.getSites().subscribe(results => {
      if(!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
