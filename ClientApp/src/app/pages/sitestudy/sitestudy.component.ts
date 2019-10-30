import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MeanAnnualRunoffMapComponent } from '../../components/modals/mean-annual-runoff-map/mean-annual-runoff-map.component';
import { MeanPrecipitationMapsComponent } from '../../components/modals/mean-precipitation-maps/mean-precipitation-maps.component';
import { Precipitation15MapComponent } from '../../components/modals/precipitation15-map/precipitation15-map.component';
import { Precipitation17MapComponent } from '../../components/modals/precipitation17-map/precipitation17-map.component';
import { SoilPermeabilityMapsComponent } from '../../components/modals/soil-permeability-maps/soil-permeability-maps.component';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-sitestudy',
  templateUrl: './sitestudy.component.html',
  styleUrls: ['./sitestudy.component.css']
})
export class SitestudyComponent implements OnInit {
    positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
    position = new FormControl(this.positionOptions[0]);

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder, private dialog: MatDialog) { }
    
    openDialog() {
        this.dialog.open(SoilPermeabilityMapsComponent);
    }
    openDialog2() {
        this.dialog.open(MeanPrecipitationMapsComponent);
    }
    openDialog3() {
        this.dialog.open(Precipitation15MapComponent);
    }
    openDialog4() {
        this.dialog.open(Precipitation17MapComponent);
    }
    openDialog5() {
        this.dialog.open(MeanAnnualRunoffMapComponent);
    }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', Validators.required]
        });
    }
}
