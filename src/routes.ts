import {Routes} from '@angular/router';
import {SignupComponent} from './app/signup/signup.component';
import {LoginComponent} from './app/login/login.component';
import {ChatRoomComponent} from './app/chat-room/chat-room.component';

export const appRoutes: Routes = [
  {path: 'inscription', component: SignupComponent},
  {path: 'connexion', component: LoginComponent},
  {path: 'chat', component: ChatRoomComponent},
  {path: '', redirectTo: '/connexion', pathMatch: 'full'},
];
