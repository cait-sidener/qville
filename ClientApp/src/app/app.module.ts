import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxGalleryModule } from 'ngx-gallery';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule,

} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SitesComponent } from './components/sites/sites.component';
import { RainfallComponent } from './pages/rainfall/rainfall.component';
import { MethodsTableComponent } from './components/methods-table/methods-table.component';
import { VariablesTableComponent } from './components/variables-table/variables-table.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { IntensitiesComponent } from './components/intensities/intensities.component';
import { SitestudyComponent } from './pages/sitestudy/sitestudy.component';
import { SoilPermeabilityMapsComponent } from './components/modals/soil-permeability-maps/soil-permeability-maps.component';
import { MeanPrecipitationMapsComponent } from './components/modals/mean-precipitation-maps/mean-precipitation-maps.component';
import { Precipitation15MapComponent } from './components/modals/precipitation15-map/precipitation15-map.component';
import { Precipitation17MapComponent } from './components/modals/precipitation17-map/precipitation17-map.component';
import { MeanAnnualRunoffMapComponent } from './components/modals/mean-annual-runoff-map/mean-annual-runoff-map.component';

import { DataService } from './services/data.service';
import { SitesListComponent } from './pages/sites-list/sites-list.component';
import { IntensitiesThirteenComponent } from './components/intensities-thirteen/intensities-thirteen.component';

@NgModule({
    declarations: [
        AppComponent,

        NavMenuComponent,
        SitesComponent,
        RainfallComponent,
        MethodsTableComponent,
        VariablesTableComponent,
        ResourcesComponent,
        IntensitiesComponent,
        SitestudyComponent,
        SoilPermeabilityMapsComponent,
        MeanPrecipitationMapsComponent,
        Precipitation15MapComponent,
        Precipitation17MapComponent,
        MeanAnnualRunoffMapComponent,
        SitesListComponent,
        IntensitiesThirteenComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatPaginatorModule,
        MatTableModule,
        MatTooltipModule,
        MatSelectModule,
        MatSortModule,
        MatStepperModule,
        NgxGalleryModule,
        RouterModule.forRoot([
            { path: '', component: ResourcesComponent, pathMatch: 'full' },
            { path: 'sites', component: SitesListComponent },
            { path: 'rainfall', component: RainfallComponent },
            { path: 'sitestudy', component: SitestudyComponent },
        ]),
        ReactiveFormsModule,
  ],
    providers: [DataService],
    entryComponents: [
        IntensitiesComponent,
        MeanAnnualRunoffMapComponent,
        MeanPrecipitationMapsComponent,
        Precipitation15MapComponent,
        Precipitation17MapComponent,
        SoilPermeabilityMapsComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
