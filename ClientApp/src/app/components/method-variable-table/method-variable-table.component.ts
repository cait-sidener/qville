import { Component } from '@angular/core';

export interface Methods {
  name: string;
  region: string;
  equation: string;
}

const METHOD_DATA: Methods[] = [
  {name: 'USGS Report 2017-5063', region: '(Region 1)', equation: '0.26 <= Area <= 14,901'},
  {name: 'USGS Technical Paper #11', region:'(Not Current)', equation: '0.4 <= Area <= 10,000'},
  {name: 'USGS Report #00-4079', region: '(Large Basins)', equation: '30 <= Area <= 9100'},
  {name: 'USGS Report 2017-5063', region: '(Region 2)', equation: '1.31 <= Area <= 3555'},
  {name: 'FENL-H', region: null, equation: '0.625 <= Area <= 500'},
  {name: 'USGS Report #00-4079', region: '(Small Basins)', equation: '0.17 <= Area <= 30'},
  {name: 'K-TRAN KU-06-4', region: '(Extended Rational)', equation: '1 <= Area <= 30'},
  {name: 'K-TRAN KU-06-4', region: '(3 Variable Regression Equations)', equation: '1 <= Area <= 30'},
  {name: 'FHWA-KS-15-12', region: '(Updated Regional Flood Equations)', equation: '0 <= Area <= 30'},
  {name: 'Rational', region: null, equation: '0 <= Area <= 1'}
];

@Component({
  selector: 'app-method-variable-table',
  templateUrl: './method-variable-table.component.html',
  styleUrls: ['./method-variable-table.component.css']
})
export class MethodVariableTableComponent {

  displayedColumns: string[] = ['name', 'region','equation'];
  dataSource = METHOD_DATA;

  constructor() { }

}
