import {Component, ViewChild, OnInit} from '@angular/core';
import { IntensitiesService } from '../../services/intensities.service';
import {MatPaginator, MatSort, MatSortable, MatTableDataSource} from '@angular/material';
import  { Observable } from 'rxjs';

@Component({
  selector: 'app-intensities',
  templateUrl: './intensities.component.html',
  styleUrls: ['./intensities.component.css']
})
export class IntensitiesComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource;
  displayedColumns = ['duration', 'yearOne', 'yearTwo', 'yearFive', 'yearTen', 'yearTwentyfive', 'yearFifty', 'yearHundred'];

  constructor(private intensitiesService: IntensitiesService) {}

  ngOnInit() {
    this.intensitiesService.getSites().subscribe(results => {
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
