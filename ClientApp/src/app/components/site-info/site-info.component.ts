import {Component, OnInit} from '@angular/core';
import { SiteInfo } from '../../models/site-info';
import { SiteInfoService } from '../../services/site-info.service';

@Component({
  selector: 'app-site-info',
  templateUrl: './site-info.component.html',
  styleUrls: ['./site-info.component.css']
})
export class SiteInfoComponent implements OnInit {
 siteInfo$: SiteInfo[];

 constructor(private siteInfoService: SiteInfoService) {}

 ngOnInit() {
   return this.siteInfoService.getSites()
   .subscribe(data => this.siteInfo$ = data);
 }

}
