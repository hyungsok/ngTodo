import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import {RouterModule, Routes} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatPaginatorModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AdminService} from './admin.service';
import { ViewComponent } from './news/view/view.component';
import { WriteComponent } from './news/write/write.component';
import {CKEditorModule} from 'ng2-ckeditor';
import {FormsModule} from '@angular/forms';

const route: Routes = [
  {path: '', component: IndexComponent, children: [
      {path: '', component: HomeComponent},    // url 경로는: /admin
      {path: 'news', component: NewsComponent, children: [
          {path: 'view/:news_id', component: ViewComponent},
          {path: 'write', component: WriteComponent},
        ]} // url 경로는: /admin/news
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    FlexLayoutModule,
    CKEditorModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  declarations: [IndexComponent, HomeComponent, NewsComponent, ViewComponent, WriteComponent],
  providers: [AdminService],
})
export class AdminModule { }
