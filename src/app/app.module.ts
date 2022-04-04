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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    InforComponent,
    PhonesComponent,
    PhoneDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
