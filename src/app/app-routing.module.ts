import { LoginComponent } from './layouts/clients/login/login.component';
import { PhoneListComponent } from './layouts/admin/phone-list/phone-list.component';
import { PhoneFormComponent } from './layouts/admin/phone-form/phone-form.component';
import { PhoneDetailComponent } from './layouts/clients/phone-detail/phone-detail.component';
import { PhonesComponent } from './layouts/clients/phones/phones.component';
import { InforComponent } from './layouts/clients/infor/infor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexAdminComponent } from './layouts/admin/index/index.component';
import { IndexComponent } from './layouts/clients/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: InforComponent
      },
      {
        path: 'phones',
        component: PhonesComponent
      },
      {
        path: 'phones/:id',
        component: PhoneDetailComponent
      },
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'admin',
    component: IndexAdminComponent,
    children: [
      {
        path: '',
        component: InforComponent
      },
      {
        path: 'phones',
        component: PhoneListComponent
      },
      {
        path: 'phones/create',
        component: PhoneFormComponent
      },
      {
        path: 'phones/edit/:id',
        component: PhoneFormComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
