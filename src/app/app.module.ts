import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { JqueryComponent } from './jquery/jquery.component';
import { AngularComponent } from './angular/angular.component';
import {RouterModule, Routes} from '@angular/router';

const route: Routes = [
  {path: '', component: IndexComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'jquery', component: JqueryComponent},
      {path: 'angular', component: AngularComponent},
    ]}, // 사용자 사이트
  // {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'}, // 관리자 사이트, lazyloading
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    JqueryComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
