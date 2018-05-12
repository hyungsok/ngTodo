import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ResultVO} from '../domain/result.vo';
import {Observable} from 'rxjs/Observable';
import {NewsVO} from '../domain/news.vo';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AdminService {

  private SERVER: string;
  private headers: HttpHeaders;

  // 뉴스목록 갱신 데이터 정의
  refresh = new Subject<boolean>(); // RxJS 객체. 데이터 발생
  refresh$ = this.refresh.asObservable();

  constructor(private http: HttpClient) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  findNews(params: any): Observable<ResultVO> {
    return this.http.post<ResultVO>(this.SERVER + '/api/newsList', params, {headers: this.headers});
  }

  findOneNews(news_id: number): Observable<NewsVO> {
    return this.http.get<NewsVO>(this.SERVER + `/api/news?news_id=${news_id}`);
  }

  addNews(news: NewsVO): Observable<ResultVO> {
    return this.http.post<ResultVO>(this.SERVER + '/api/news', news, {headers: this.headers});
  }

  imageUpload(formData: FormData) {
    return this.http.post(this.SERVER + '/api/imageUpload', formData);
  }
}
