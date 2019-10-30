import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material'

export interface variables {
    varname: string;
    description: string;
    units: string;
}

const VARIABLE_DATA: variables[] = [
    { varname: 'C', description: 'Runoff (rational) Coefficient', units: 'dimensionless' },
    { varname: 'CDA', description: 'Contributing Drainage Area', units: '	miles^2' },
    { varname: 'CoNo', description: 'County Number', units: 'n/a' },
    { varname: 'I', description: 'Rainfall Intensity', units: 'inches/hour' },
    { varname: 'Ia', description: 'Basin-Average Rainfall Intensity', units: 'inches/hour' },
    { varname: 'MAP', description: 'Mean Annual Precipitation', units: 'inches' },
    { varname: 'MAP15', description: 'Mean Annual Precipitation (Kansas 2015)', units: 'inches' },
    { varname: 'MAR', description: 'Mean Annual Runoff', units: 'inches' },
    { varname: 'MCL', description: 'Main Channel Length, Bridge to Divide', units: 'miles' },
    { varname: 'P2', description: '2yr, 24hr Rainfall', units: 'inches' },
    { varname: 'PRECIPRIS10', description: 'Mean Annual Precipitation (USGS 2017)', units: 'inches' },
    { varname: 'Q', description: 'Discharge', units: 'cubic feet per second' },
    { varname: 'Sl', description: 'Slope (10%-85%)', units: 'feet/mile' },
    { varname: 'Sp', description: 'Soil Permeability', units: 'inches/hour' },
    { varname: 'tc', description: 'Time of Concentration', units: 'minutes' },

];

@Component({
  selector: 'app-variables-table',
  templateUrl: './variables-table.component.html',
  styleUrls: ['./variables-table.component.css']
})
export class VariablesTableComponent implements OnInit {
    displayedColumns: string[] = ['varname', 'description', 'units'];
    dataSource = new MatTableDataSource(VARIABLE_DATA);

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    ngOnInit() {
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
