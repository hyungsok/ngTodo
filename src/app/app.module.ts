import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { JqueryComponent } from './jquery/jquery.component';
import { AngularComponent } from './angular/angular.component';
import {RouterModule, Routes} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { MydatePipe } from './mydate.pipe';
import { RegisterComponent } from './auth/register/register.component';
import { NicknameComponent } from './nickname/nickname.component';
import { ChatComponent } from './chat/chat.component';
import {LoginDialogComponent} from './auth/login/login.dialog.component';
import {AuthGuardService} from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: IndexComponent, children: [
      { path: '', component: HomeComponent},
      { path: 'jquery', component: JqueryComponent},
      { path: 'angular', component: AngularComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'nickname', component: NicknameComponent, canActivate: [AuthGuardService]},
      { path: 'chat', component: ChatComponent, canActivate: [AuthGuardService]},
    ]},
  // 참고: 향후 관리자 생성 모듈
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'},
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    JqueryComponent,
    HighlightDirective,
    MydatePipe,
    LoginDialogComponent,
    RegisterComponent,
    NicknameComponent,
    ChatComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [UserService, AuthGuardService],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule { }
