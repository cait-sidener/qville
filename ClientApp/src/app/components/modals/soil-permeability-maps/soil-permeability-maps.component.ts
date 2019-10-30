import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-soil-permeability-maps',
  templateUrl: './soil-permeability-maps.component.html',
  styleUrls: ['./soil-permeability-maps.component.css']
})
export class SoilPermeabilityMapsComponent implements OnInit {

    constructor() { }

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit(): void {

        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide,
                imageDescription: true,
                previewCloseOnClick: true,
                previewCloseOnEsc: true
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];

        

        this.galleryImages = [
            {
                small: '../../../../assets/images/SoilPermeabilityOld.jpg',
                medium: '../../../../assets/images/SoilPermeabilityOld.jpg',
                big: '../../../../assets/images/SoilPermeabilityOld.jpg'
            },
            {
                small: '../../../../assets/images/SoilPermeabilityNew.gif',
                medium: '../../../../assets/images/SoilPermeabilityNew.gif',
                big: '../../../../assets/images/SoilPermeabilityNew.gif'
            }
     
        ];
    }

}
