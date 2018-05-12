import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {NewsVO} from '../../domain/news.vo';
import {PageVO} from '../../domain/page.vo';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsList: NewsVO[];
  page: PageVO;

  constructor(private adminService: AdminService, private router: Router) {
    this.page = new PageVO(0, 5, 0);
  }

  ngOnInit() {
    // 1) 이벤트 등록
    this.adminService.refresh$
      .subscribe(data => {
        if (data) {
          // 뉴스가 등록되거나 삭제되면 목록 갱신
          this.getNewsList();
        }
      });

    this.getNewsList();
  }

  getNewsList() {
    const params = {
      start_index: this.page.pageIndex * this.page.pageSize,
      page_size: this.page.pageSize
    };

    this.adminService.findNews(params)
      .subscribe(body => {
        console.log(body);
        // body의 data 필드를 newsList에 담기
        this.newsList = body.data;
        this.page.totalCount = body.total;
        console.log(this.newsList);
      });
  }

  pageChanged(event: any) {
    console.log(event);
    this.page.pageIndex = event.pageIndex;
    this.page.pageSize = event.pageSize;

    this.getNewsList();
  }

  gotoView(news: NewsVO) {
    this.router.navigateByUrl(`/admin/news/view/${news.news_id}`);
  }

  gotoWrite() {
    this.router.navigateByUrl('/admin/news/write');
  }
}
