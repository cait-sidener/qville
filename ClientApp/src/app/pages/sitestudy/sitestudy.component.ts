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
import { RainfallMapComponent } from '../../components/modals/rainfall-map/rainfall-map.component';

@Component({
  selector: 'app-sitestudy',
  templateUrl: './sitestudy.component.html',
  styleUrls: ['./sitestudy.component.css']
})
export class SitestudyComponent implements OnInit {
  checked = true;
    positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
    position = new FormControl(this.positionOptions[0]);

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    post:any;
    titleAlert: string = 'This field is required.'

    projectNo: string = '';
    county: string = '';
    bridgeSerial: string ='';
    notes: string= '';
    validate: string = '';
    currentMethods: string = '';
    drainageArea: string = '';
    countyOptions: string = '';
    rainfall: string = '';
    soilPermeability: string = '';
    slope: string = '';
    annualPrecipitation: string = '';
    annualPrecipitation15: string = '';
    annualPrecipitation17: string = '';
    hydrolicRegion: string = '';
    annualRunoff: string = '';
    channelLength: string = '';
    runoffCoefficient: string = '';
    autoCalculate: string = '';
    concentration: string = '';
    methodVariables: string = '';

    constructor(private _formBuilder: FormBuilder, private dialog: MatDialog) {
      this.firstFormGroup = _formBuilder.group({
        'projectNo': '',
        'county' : [null, Validators.required],
        'bridgeSerial': '',
        'notes': '',
      });

      this.secondFormGroup = _formBuilder.group({
        'validate': '',
        'currentMethods': '',
        'drainageArea': '',
        'countyOptions': '',
        'rainfall': '',
        'soilPermeability': '',
        'slope': '',
      });

      this.thirdFormGroup = _formBuilder.group({
        'annualPrecipitation': '',
        'annualPrecipitation15': '',
        'annualPrecipitation17': '',
        'hydrolicRegion' : '',
        'annualRunoff': '',
        'channelLength': '',
        'runoffCoefficient': '',
        'autoCalculate': '',
        'concentration': ''
      })
     }

     addPost(post) {
       this.projectNo = post.projectNo;
       this.county = post.county;
       this.bridgeSerial = post.bridgeSerial;
       this.notes = post.notes;
       this.currentMethods = post.currentMethods;
       this.drainageArea = post.drainageArea;
       this.countyOptions = post.countyOptions;
       this.soilPermeability = post.soilPermeability;
       this.slope = post.slope;
       this.annualPrecipitation = post.annualPrecipitation;
       this.annualPrecipitation15 = post.annualPrecipitation15;
       this.annualPrecipitation17 = post.annualPrecipitation17;
       this.hydrolicRegion = post.hydrolicRegion;
       this.annualRunoff = post.annualRunoff;
       this.channelLength = post.channelLength;
       this.runoffCoefficient = post.runoffCoefficient;
       this.concentration = post.concentration;
     }

    ngOnInit() {
      this.secondFormGroup.get('validate').valueChanges.subscribe(
        (validate) => {
          if (validate == '1') {
            this.secondFormGroup.get('rainfall').disable();
          }
          else if (validate =='2') {
            this.secondFormGroup.get('rainfall').enable();
          }
        }
      )

      this.thirdFormGroup.get('autoCalculate').valueChanges.subscribe(
        (validate) => {
          if (validate =='1') {
            this.thirdFormGroup.get('concentration').disable();
          }
          else {
            this.thirdFormGroup.get('concentration').enable();
          }
        }
      )
    }

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
  openDialog6() {
    this.dialog.open(RainfallMapComponent);
}


}
