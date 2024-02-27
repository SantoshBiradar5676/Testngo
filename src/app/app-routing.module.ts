import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NgoComponent } from './components/ngo/ngo.component';
import { NgolistComponent } from './components/ngolist/ngolist.component';

const routes: Routes = [
  {
    path:'add',
    component: AddUserComponent
    },
    {
      path:'addngo',
      component: NgoComponent
      },
      {
        path:'list',
        component: NgolistComponent
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
