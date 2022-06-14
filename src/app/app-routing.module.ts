import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { LoginComponent } from './Components/login/login.component';
import { UserListComponent } from './Components/user-list/user-list.component';

const routes: Routes = [
{path:"login",component: LoginComponent},
{path:"", redirectTo: "/login", pathMatch:"full"},
{path:"admin/users",component: UserListComponent,canActivate:[AuthGuard]},
{path:"admin/add-user",component: AddUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
