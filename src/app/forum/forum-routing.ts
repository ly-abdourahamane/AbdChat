import {RouterModule, Routes} from '@angular/router';
import {CountryComponent} from './country/country.component';
import {NgModule} from '@angular/core';
import {DataAccessService} from './country/data-access.service';
import {TOKENS_PROVIDERS} from './country/countries.tokens';
import {ForumHomeComponent} from './forum-home/forum-home.component';

export const routes: Routes = [
  {path: '', component: ForumHomeComponent},
  {path: 'continents', component: CountryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DataAccessService, ...TOKENS_PROVIDERS]
})

export class ForumRoutingModule {

}
