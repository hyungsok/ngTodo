import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule, MatExpansionModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AdminService} from './admin.service';

const route: Routes = [
  {path: '', component: IndexComponent, children: [
      {path: '', component: HomeComponent},    // url 경로는: /admin
      {path: 'news', component: NewsComponent} // url 경로는: /admin/news
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FlexLayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
  ],
  declarations: [IndexComponent, HomeComponent, NewsComponent],
  providers: [AdminService],
})
export class AdminModule { }