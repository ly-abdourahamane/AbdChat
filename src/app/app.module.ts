import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';

import {FormsModule} from '@angular/forms';
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,

    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),

    // MATERIAL
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [AuthenticateService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
