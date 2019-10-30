import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-precipitation15-map',
  templateUrl: './precipitation15-map.component.html',
  styleUrls: ['./precipitation15-map.component.css']
})
export class Precipitation15MapComponent implements OnInit {

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
                small: '../../../../assets/images/MeanAnnualPrecipitation2015.jpg',
                medium: '../../../../assets/images/MeanAnnualPrecipitation2015.jpg',
                big: '../../../../assets/images/MeanAnnualPrecipitation2015.jpg'
            }

        ];
    }

}
