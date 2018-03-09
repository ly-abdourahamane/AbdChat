import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule,
  MatSelectModule, MatTabsModule,
  MatToolbarModule
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
import { FlexboxComponent } from './layout/flexbox/flexbox.component';
import {EmojiPickerModule} from 'ng-emoji-picker';
import {CarouselModule, GalleriaModule, LightboxModule, SidebarModule} from 'primeng/primeng';
import { GalleriaPngComponent } from './galleria-png/galleria-png.component';
import { CarouselComponent } from './carousel/carousel.component';
import {TOKENS_PROVIDERS} from './carousel/country/countries.tokens';
import {DataAccessService} from './carousel/country/data-access.service';
import {CountryComponent} from './carousel/country/country.component';


import { ShareModule } from '@ngx-share/core';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {ShareButtonModule} from '@ngx-share/button';
import { FooterComponent } from './footer/footer.component';
import { SigallComponent } from './sigall/sigall.component';

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
    SigallComponent
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

    // Primeng
    GalleriaModule,
    LightboxModule,
    CarouselModule,
    SidebarModule,

    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For linkedIn & Tumblr counts
    ShareModule.forRoot(),
    ShareButtonModule
  ],
  providers: [AuthenticateService, ChatService, ...TOKENS_PROVIDERS, DataAccessService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
