import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import {ForumRoutingModule} from './forum-routing';
import { ForumHomeComponent } from './forum-home/forum-home.component';
import {ChartModule} from 'primeng/chart';
import {HttpClientModule} from '@angular/common/http';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatSliderModule, MatSlideToggleModule} from '@angular/material';
import {CheckboxModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    // primeng
    ChartModule,

    ForumRoutingModule,

    // material
    MatAutocompleteModule,
    MatSlideToggleModule,
    CheckboxModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [CountryComponent, ForumHomeComponent]
})
export class ForumModule { }
