import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule, MatPaginatorModule,
  MatSelectModule, MatSidenavModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MessageComponent} from './message/message.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserComponent} from './user/user.component';
import {ChatFormComponent} from './chat-form/chat-form.component';
import {ChatRoomComponent} from './chat-room/chat-room.component';
import {FeedComponent} from './feed/feed.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from '../environments/environment';
import {ChatService} from './shared/service/chat.service';
import {AuthenticateService} from './shared/service/authenticate.service';
import {FlexboxComponent} from './layout/flexbox/flexbox.component';
import {EmojiPickerModule} from 'ng-emoji-picker';
import {GalleriaPngComponent} from './galleria-png/galleria-png.component';
import {CarouselComponent} from './carousel/carousel.component';
import {TOKENS_PROVIDERS} from './carousel/country/countries.tokens';
import {DataAccessService} from './carousel/country/data-access.service';
import {CountryComponent} from './carousel/country/country.component';


import {ShareModule} from '@ngx-share/core';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {ShareButtonModule} from '@ngx-share/button';
import {FooterComponent} from './footer/footer.component';
import {SigallComponent} from './sigall/sigall.component';
import {GMapModule} from 'primeng/gmap';
import {GmapComponent} from './gmap/gmap.component';
import {GrowlModule} from 'primeng/growl';

import {
  CarouselModule,
  CheckboxModule,
  GalleriaModule,
  LightboxModule,
  SidebarModule
} from 'primeng/primeng';

import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import { UploadComponent } from './upload/upload.component';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularComponent} from './courses-container/angular/angular.component';
import {CoursesContainerComponent} from './courses-container/courses-container.component';
import { NewCourseComponent } from './courses-container/new-course/new-course.component';
import {EditorModule} from 'primeng/editor';
import { CoursesComponent } from './courses-container/courses/courses.component';
import { CourseComponent } from './courses-container/course/course.component';
import { CourseListComponent } from './courses-container/course-list/course-list.component';
import {CourseService} from './shared/service/course.service';
import { SubjectListComponent } from './courses-container/angular/subject-list/subject-list.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { SubjectDiscussionComponent } from './courses-container/angular/subject-discussion/subject-discussion.component';
import { DisplayOnionComponent } from './courses-container/angular/subject-discussion/display-opinion/display-onion.component';
import { MouseLiveColorDirective } from './directives/mouse-live-color.directive';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
import { DialogOverviewComponent } from './home-dialog/dialog-overview/dialog-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MessageComponent,
    UserListComponent,
    UserComponent,
    ChatFormComponent,
    ChatRoomComponent,
    FeedComponent,
    SignupComponent,
    LoginComponent,
    FlexboxComponent,
    GalleriaPngComponent,
    CarouselComponent,
    CountryComponent,
    FooterComponent,
    SigallComponent,
    GmapComponent,
    UploadComponent,
    AngularComponent,
    CoursesContainerComponent,
    NewCourseComponent,
    CoursesComponent,
    CourseComponent,
    CourseListComponent,
    SubjectListComponent,
    SendMailComponent,
    SubjectDiscussionComponent,
    DisplayOnionComponent,
    MouseLiveColorDirective,
    HomeDialogComponent,
    DialogOverviewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    /*    Ng2EmojiModule,
        Ng2EmojiModule.forRoot(),*/
    EmojiPickerModule,
    // PickerModule,

    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,

    // MATERIAL
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    MatTooltipModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,

    // Primeng
    GalleriaModule,
    LightboxModule,
    CarouselModule,
    SidebarModule,
    GMapModule,
    GrowlModule,
    CheckboxModule,
    DialogModule,
    ButtonModule,
    EditorModule,

    // flex layout
    FlexLayoutModule,

    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For linkedIn & Tumblr counts
    ShareModule.forRoot(),
    ShareButtonModule
  ],
  providers: [AuthenticateService,
    ChatService,
    ...TOKENS_PROVIDERS,
    DataAccessService,
    CourseService
  ],
  entryComponents: [DialogOverviewComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
