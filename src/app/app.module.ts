import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layouts/clients/header/header.component';
import { FooterComponent } from './layouts/clients/footer/footer.component';
import { IndexComponent } from './layouts/clients/index/index.component';
import { InforComponent } from './layouts/clients/infor/infor.component';
import { PhonesComponent } from './layouts/clients/phones/phones.component';
import { PhoneDetailComponent } from './layouts/clients/phone-detail/phone-detail.component';
import { AsideComponent } from './layouts/admin/aside/aside.component';
import { IndexAdminComponent } from './layouts/admin/index/index.component';
import { HeaderAdminComponent } from './layouts/admin/header/header.component';
import { FooterAdminComponent } from './layouts/admin/footer/footer.component';
import { PhoneFormComponent } from './layouts/admin/phone-form/phone-form.component';
import { PhoneListComponent } from './layouts/admin/phone-list/phone-list.component';
import { PhonesService } from './services/phones/phones.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ShowErrorComponent } from './components/show-error/show-error.component';
import { LoginComponent } from './layouts/clients/login/login.component';
import { AuthServiceService } from './services/auth-service.service';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { StatusBtnComponent } from './components/status-btn/status-btn.component';
import { PhoneFormEditComponent } from './phone-form-edit/phone-form-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    InforComponent,
    PhonesComponent,
    PhoneDetailComponent,
    AsideComponent,
    IndexAdminComponent,
    HeaderAdminComponent,
    FooterAdminComponent, PhoneFormComponent, PhoneListComponent, ShowErrorComponent, LoginComponent, StatusBtnComponent, PhoneFormEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [PhonesService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GOOGLE_CLIENT_ID
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
