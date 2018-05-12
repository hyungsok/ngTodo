import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MemberVO} from "../../domain/member.vo";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.dialog.component.html',
  styleUrls: ['./login.dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginDialogComponent implements OnInit, OnDestroy {
  member = new MemberVO();

  naverUrl: string;
  kakaoUrl: string;
  facebookUrl: string;

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // naver login url 얻기: 교육용 localhost, production은 naver3
    this.userService.getSocial("naver2")
      .subscribe(value => {
        this.naverUrl = value['url'];
      });

    this.userService.getSocial("kakao2")
      .subscribe(value => {
        this.kakaoUrl = value['url'];
      });

    this.userService.getSocial("facebook2")
      .subscribe(value => {
        this.facebookUrl = value['url'];
      });
  }

  gotoSocial(site: string) {
    // 내정보 등 로그인이 필요한 메뉴를 클릭시는 redirectUrl이 존재함.
    // 그 외에 로그인 버튼을 클릭시는 redirectUrl이 없고 현재 url을 redirectUrl로 지정한다.
    const redirectUrl = localStorage.getItem('redirectUrl');
    if (!redirectUrl) {
      localStorage.setItem('redirectUrl', this.router.url);
    }

    if (site === 'naver') {
      location.href = this.naverUrl;
    } else if (site === 'kakao') {
      location.href = this.kakaoUrl;
    } else if (site === 'facebook') {
      location.href = this.facebookUrl;
    }
  }

  ngOnDestroy(): void {

  }
}
