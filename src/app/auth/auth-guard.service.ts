import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router,
  RouterStateSnapshot
} from "@angular/router";
import {UserService} from "../user.service";
import {MemberVO} from "../domain/member.vo";
import {ResultVO} from "../domain/result.vo";
import {JwtHelper} from "angular2-jwt";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {LoginDialogComponent} from "./login/login.dialog.component";
import {MatDialog, MatSnackBar} from "@angular/material";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
  private jwtHelper: JwtHelper;

  public authSource = new Subject<boolean>();

  public authSource$: Observable<boolean> = this.authSource.asObservable();

  constructor(private router: Router, private userService: UserService,
              private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.jwtHelper = new JwtHelper();
    // 초기화: 모든 컴포넌트가 생성된 후에 초기 데이터를 보낸다.
    setTimeout(() => this.authSource.next(this.isAuthenticated()), 1000);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLogin(state.url);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAdmin()) {
      return true;
    }

    localStorage.setItem('redirectUrl', '/admin');
    this.openLogin();
    return false;
  }

  openLogin() {
    this.dialog.open(LoginDialogComponent);
  }


  checkLogin(url: string): boolean {
    // save redirect url
    localStorage.setItem('redirectUrl', url);

    if (this.isAuthenticated()) {
      this.authSource.next(true);
      return true;
    } else {
      this.authSource.next(false);
      this.openLogin();
      this.snackBar.open("로그인이 필요한 서비스입니다.", null, {duration: 2000});
      return false;
    }
  }

  isAdmin() {
    let token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      console.log(this.jwtHelper.decodeToken(token));
      if (this.jwtHelper.decodeToken(token).sub.indexOf('admin') >= 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getMemberId(): number {
    let token = localStorage.getItem('token');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      // console.log(this.jwtHelper.decodeToken(token));
      return +(this.jwtHelper.decodeToken(token).jti);
    } else {
      return 0;
    }
  }

  isAuthenticated(): boolean {
    let token = localStorage.getItem('token');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      // console.log(this.jwtHelper.decodeToken(token));
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    // 스토리지에 저장된 토큰 정보와 인증 정보를 삭제
    localStorage.removeItem('token');
    localStorage.removeItem('redirectUrl');
    this.authSource.next(false);
    this.snackBar.open("로그아웃하였습니다.", null, {duration: 2000});
    this.router.navigateByUrl('/');
  }
}
