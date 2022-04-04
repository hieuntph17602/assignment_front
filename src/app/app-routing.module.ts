import { PhoneDetailComponent } from './layouts/clients/phone-detail/phone-detail.component';
import { PhonesComponent } from './layouts/clients/phones/phones.component';
import { InforComponent } from './layouts/clients/infor/infor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layouts/clients/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: InforComponent
      }
    ]
  },
  {
    path: 'phones',
    component: PhonesComponent
  },
  {
    path: 'phones/:id',
    component: PhoneDetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
