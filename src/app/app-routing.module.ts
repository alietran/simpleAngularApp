import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { UserListComponent } from './Components/user-list/user-list.component';

const routes: Routes = [
{path:"login",component: LoginComponent},
{path:"", redirectTo: "/login", pathMatch:"full"},
{path:"admin/users",component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
