import { Component, OnInit } from '@angular/core';
import { UsgsReportService } from '../../../services/usgs-report.service';
import { FhwaService } from '../../../services/fhwa.service';
import { RationalService } from '../../../services/rational.service';

@Component({
  selector: 'app-site-summary',
  templateUrl: './site-summary.component.html',
  styleUrls: ['./site-summary.component.css']
})
export class SiteSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
