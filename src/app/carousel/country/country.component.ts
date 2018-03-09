import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataAccessService} from './data-access.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  audio: any;

  countriesA2s: string[];
  selectedA2 = 'GN';

  nativeCountryName: string;
  commonCountryName: string;
  capital: string;
  continents: string;
  subRegion: string;
  callingCode: string;
  area: number;
  populationCount: number;
  populationPrecentage: number;
  languages: string;
  wikiLinkSuffix: string;
  anthemLink: string;


  constructor(private _dataAccessService: DataAccessService) { }

  onAudioPlay() {
    this.audioPlayerRef.nativeElement.play();
  }

  ngOnInit() {
    this.countriesA2s = this._dataAccessService.getCountriesA2s();

    this.onA2Changed(this.selectedA2);
  }


  onA2Changed(a2) {
    this.selectedA2 = a2;

    //  this.nativeCountryName = this._dataAccessService.getNativeCountryName(this.selectedA2);
    //  this.commonCountryName = this._dataAccessService.getCommonCountryName(this.selectedA2);
    this.capital = this._dataAccessService.getCountryNativeName(this.selectedA2);
    console.log(this.capital);

    this.audio = this._dataAccessService.getAnthemLink(this.selectedA2);

    console.log(this._dataAccessService.getAnthemLink(this.selectedA2));
    console.log(this._dataAccessService.getCountryNativeName(this.selectedA2));
    console.log(this._dataAccessService.getCapital(this.selectedA2));
    console.log(this._dataAccessService.getCountriesA2s());

    console.log(this._dataAccessService.getCountriesA2s()[0]);

    console.log(this._dataAccessService.getPopulationCount(this.selectedA2));
    console.log(this._dataAccessService.getWikiSuffix(this.selectedA2));
    console.log(this._dataAccessService.getPopulationCount(this.selectedA2));
    console.log(this._dataAccessService.getCountryCommonName(this.selectedA2));
    console.log(this._dataAccessService.getCountryObjByA2(this.selectedA2).capital);

    // this.continents = this._dataAccessService.getContinents(this.selectedA2);
    // ...
  }

}
