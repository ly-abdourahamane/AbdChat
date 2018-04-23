import {Routes} from '@angular/router';
import {ChatRoomComponent} from './app/chat-room/chat-room.component';
import {FlexboxComponent} from './app/layout/flexbox/flexbox.component';
import {CountryComponent} from './app/carousel/country/country.component';
import {SigallComponent} from './app/sigall/sigall.component';
import {UploadComponent} from './app/upload/upload.component';
import {CoursesComponent} from './app/courses/courses.component';

export const appRoutes: Routes = [

  {path: 'courses', component: CoursesComponent},

  {path: 'forum', loadChildren : 'app/forum/forum.module#ForumModule'},

  {path: 'upload', component: UploadComponent},

  {path: 'inscription', component: SigallComponent},
  {path: 'connexion', component: SigallComponent},
  {path: 'chat', component: ChatRoomComponent},
  {path: '', redirectTo: '/connexion', pathMatch: 'full'},
  {path: 'layout', component: FlexboxComponent},
  {path: 'country', component: CountryComponent}
];
