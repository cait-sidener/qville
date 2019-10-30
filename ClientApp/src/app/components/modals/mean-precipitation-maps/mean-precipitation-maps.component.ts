import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-mean-precipitation-maps',
  templateUrl: './mean-precipitation-maps.component.html',
  styleUrls: ['./mean-precipitation-maps.component.css']
})
export class MeanPrecipitationMapsComponent implements OnInit {

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
                small: '../../../../assets/images/MeanAnnualPrecipitation.gif',
                medium: '../../../../assets/images/MeanAnnualPrecipitation.gif',
                big: '../../../../assets/images/MeanAnnualPrecipitation.gif'
            }

        ];
    }

}
