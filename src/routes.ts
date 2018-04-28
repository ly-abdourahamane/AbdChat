import {Routes} from '@angular/router';
import {ChatRoomComponent} from './app/chat-room/chat-room.component';
import {FlexboxComponent} from './app/layout/flexbox/flexbox.component';
import {CountryComponent} from './app/carousel/country/country.component';
import {SigallComponent} from './app/sigall/sigall.component';
import {UploadComponent} from './app/upload/upload.component';
import {AngularComponent} from './app/courses-container/angular/angular.component';
import {CoursesContainerComponent} from './app/courses-container/courses-container.component';
import {CourseComponent} from './app/courses-container/course/course.component';
import {CourseListComponent} from './app/courses-container/course-list/course-list.component';
import {SendMailComponent} from './app/send-mail/send-mail.component';
import {SubjectDiscussionComponent} from './app/courses-container/angular/subject-discussion/subject-discussion.component';

export const appRoutes: Routes = [

  {path: '', redirectTo: '/connexion', pathMatch: 'full'},

  {path: 'cours', component: CoursesContainerComponent, children: [
      {path: '', component: CourseListComponent},
      {path: 'nouveau-cours', component: CourseComponent },
      {path: ':path', component: AngularComponent},
      {path: ':path/:title', component: SubjectDiscussionComponent}
    ]},

  {path: 'forum', loadChildren : 'app/forum/forum.module#ForumModule'},

  {path: 'upload', component: UploadComponent},

  {path: 'inscription', component: SigallComponent},
  {path: 'connexion', component: SigallComponent},
  {path: 'chat', component: ChatRoomComponent},
  {path: 'layout', component: FlexboxComponent},
  {path: 'country', component: CountryComponent},




  {path: 'nous-contacter', component: SendMailComponent}

];
