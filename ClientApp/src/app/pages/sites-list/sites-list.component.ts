import {Component, ViewChild, OnInit} from '@angular/core';
import { DataService} from '../../services/data.service';
import {MatPaginator, MatSort, MatSortable, MatTableDataSource} from '@angular/material';
import  { Observable } from 'rxjs';

@Component({
  selector: 'app-sites-list',
  templateUrl: './sites-list.component.html',
  styleUrls: ['./sites-list.component.css']
})
export class SitesListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  dataSource;
  displayedColumns = ['projectNo', 'dateAdded', 'dateModified', 'addedBy', 'modifiedBy', 'countyNumber', 'bridgeSerial', 'star'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSites().subscribe(results => {
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
