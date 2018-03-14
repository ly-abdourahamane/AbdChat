import { Injectable, Inject } from '@angular/core';
import { Countries, ICountry, Anthems, IAnthem, IOfficialCommon } from 'countries-data';
import * as _ from 'lodash';
import {ANTHEMS_DATA, COUNTRIES_DATA, LANGUAGES_DATA} from './countries.tokens';


@Injectable()
export class DataAccessService {

  constructor(@Inject(ANTHEMS_DATA) private _anthemsData: Anthems,
              @Inject(COUNTRIES_DATA) private _countriesData: Countries,
              @Inject(LANGUAGES_DATA) private _langageData) {
    console.log(this._anthemsData);
    console.log(this._countriesData);
    console.log(this._langageData);

    console.log(this._countriesData)
  }

  getCountryNativeName(a2: string): string {
    const values: IOfficialCommon[] = _.values(this.getCountryObjByA2(a2).name.native);
    if (values.length > 0) {
      return values[0].common;
    }

    return '';
  }

  getCountryCommonName(a2: string): string {
    return this.getCountryObjByA2(a2).name.common;
  }

  getCapital(a2: string): any {
     console.log(this._countriesData);
    // console.log(ANTHEMS_DATA);
    return this.getCountryObjByA2(a2).geo;
  }

  getSubRegion(a2: string): string {
    return this.getCountryObjByA2(a2).geo.subregion;
  }

  getPopulationCount(a2: string): number {
    return this.getCountryObjByA2(a2).population.count;
  }

  getAnthemLink(a2: string): string {
    const anthemObj: IAnthem = this._anthemsData[a2];
    return anthemObj ? this._anthemsData[a2].link : null;
  }

  // getContinents ...
  // getCallingCodePrefix ...
  // getLanguages ...
  // getPopulationPrecentage ...
  // getArea ...
  getWikiSuffix(a2: string): string {
    return this.getCountryObjByA2(a2).wikiLink;
  }

  getCountriesA2s(): string[] {
    return _.keys(this._countriesData).sort();
  }

  getCountryObjByA2(a2: string): ICountry {
    return this._countriesData[a2.toUpperCase()];
  }
}
