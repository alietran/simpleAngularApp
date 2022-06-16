import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { LoginComponent } from './Components/login/login.component';
import { UserListComponent } from './Components/user-list/user-list.component';

const routes: Routes = [
{path:"login",component: LoginComponent},
{path:"", redirectTo: "/login", pathMatch:"full"},
{path:"admin/users",component: UserListComponent,canActivate:[AuthGuard]},
{path:"admin/add-user",component: AddUserComponent,canActivate:[AuthGuard]},
{path:"admin/edit-user/:id",component: EditUserComponent,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
