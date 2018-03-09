import {Routes} from '@angular/router';
import {ChatRoomComponent} from './app/chat-room/chat-room.component';
import {FlexboxComponent} from './app/layout/flexbox/flexbox.component';
import {CountryComponent} from './app/carousel/country/country.component';
import {SigallComponent} from './app/sigall/sigall.component';

export const appRoutes: Routes = [
  {path: 'inscription', component: SigallComponent},
  {path: 'connexion', component: SigallComponent},
  {path: 'chat', component: ChatRoomComponent},
  {path: '', redirectTo: '/connexion', pathMatch: 'full'},
  {path: 'layout', component: FlexboxComponent},
  {path: 'country', component: CountryComponent}
];
