import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material'

export interface Methods {
    method: string;
    area: string;
    equation: string;
    variable: string;
    current: string;
}

const METHOD_DATA: Methods[] = [
    { method: 'USGS Technical Paper #11', area: '0.4 <= CDA <= 10000', equation: 'Q=a*(CDAb1)*(P2b2)*(Spb3)*(Slb4)', variable: '1 to 4', current: "check_box_outline_blank" },
    { method: 'SGS Report #00-4079 (Small Basins)', area: '0.17 <= CDA < 30', equation: '	Q=a*(CDAb1)*(MAPb2)', variable: '2', current: "check_box" },
    { method: 'USGS Report #00-4079 (Large Basins)', area: '30 <= CDA <= 9100	', equation: 'Q=a*(CDAb1)*(MAPb2)*(Spb3)*(Slb4)', variable: '2 to 4', current: "check_box" },
    { method: 'K-TRAN KU-06-4 (Extended Rational)', area: '1 < CDA < 30', equation: 'Q=a*(MAPb1)*(I)*(CDA)', variable: '3', current: "check_box_outline_blank" },
    { method: 'K-TRAN KU-06-4 (3 Var Regression Equations)', area: '1 < CDA < 30', equation: 'Q=a*(MAPb1)*(Ib2)*(CDAb3)	', variable: '3', current: "check_box_outline_blank" },
    { method: 'Rational Method', area: '0 < CDA <= 1', equation: 'Q=C*I*CDA', variable: '3', current: "check_box" },
    { method: 'FENL-H', area: '0.625 <= CDA <= 500', equation: 'Q=138*MAR0.443*CDA(0.35*MAR0.262)*a*MARb1', variable: '2', current: "check_box_outline_blank" },
    { method: 'FHWA-KS-15-12 (Updated Regression Equations)', area: '0 < CDA < 30', equation: 'Q=a*MAP15b1*(Ia*CDA)b2', variable: '3', current: "check_box" },
    { method: 'USGS Report 2017-5063 (Region 1)', area: '0.26 <= CDA <= 14901', equation: 'Q=a*(CDAb1)*(PRECIPRIS10b2)', variable: '2', current: "check_box" },
    { method: 'USGS Report 2017-5063 (Region 2)', area: '1.31 <= CDA <= 3555', equation: 'Q=a*(CDAb1)', variable: '1', current: "check_box" },
];

@Component({
  selector: 'app-methods-table',
  templateUrl: './methods-table.component.html',
  styleUrls: ['./methods-table.component.css']
})
export class MethodsTableComponent implements OnInit {
    displayedColumns: string[] = ['method', 'area', 'equation', 'variable', 'current'];
    dataSource = new MatTableDataSource(METHOD_DATA);

    @ViewChild(MatSort, { static: true }) sort: MatSort;

    ngOnInit() {
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}

