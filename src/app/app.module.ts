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
    FooterAdminComponent, PhoneFormComponent, PhoneListComponent
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
