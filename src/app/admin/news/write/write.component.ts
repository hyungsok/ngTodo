import { Component, OnInit } from '@angular/core';
import {NewsVO} from '../../../domain/news.vo';
import {AdminService} from '../../admin.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  news = new NewsVO();

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addNews() {
    this.adminService.addNews(this.news)
      .subscribe(body => {
        if (body.result === 0) {
          // success
        }
      });
  }
}
