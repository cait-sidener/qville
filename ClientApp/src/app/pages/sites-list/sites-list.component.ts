import {Component, ViewChild, OnInit} from '@angular/core';
import { DataService} from '../../services/data.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { SiteSummaryComponent } from '../../components/modals/site-summary/site-summary.component'


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

  constructor(private dataService: DataService, private dialog: MatDialog) {}

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

  openDialog() {
    this.dialog.open(SiteSummaryComponent);
}
}
