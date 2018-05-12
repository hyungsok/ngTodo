import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthGuardService} from "../auth/auth-guard.service";
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  constructor(public authService: AuthGuardService, private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "jquery",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/ic_extension_black_24px.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "angular",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/ic_change_history_black_24px.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "news",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/ic_dashboard_black_24px.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "person",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/ic_person_black_24px.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "login",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/ic_input_black_24px.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "logout",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/ic_power_settings_new_black_24px.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "nickname",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/ic_build_black_24px.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "chat",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/ic_chat_black_24px.svg")
    );
  }

  ngOnInit() {

  }
}
