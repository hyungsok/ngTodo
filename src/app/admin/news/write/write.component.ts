import { Component, OnInit } from '@angular/core';
import {NewsVO} from '../../../domain/news.vo';
import {AdminService} from '../../admin.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  news = new NewsVO();

  constructor(private adminService: AdminService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  addNews() {
    this.adminService.addNews(this.news)
      .subscribe(body => {
        if (body.result === 0) {
          // success
          this.snackBar.open('등록하였습니다.', null, {duration: 3000});
          this.router.navigateByUrl('/admin/news');
        }
      });
  }
}
