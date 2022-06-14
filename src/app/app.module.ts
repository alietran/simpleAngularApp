import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { FilterStatusPipe } from './Pipe/filter-status.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    LoginComponent,
    AddUserComponent,
    FilterStatusPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     NgxPaginationModule,
     FormsModule,
     OrderModule,
     FilterPipeModule,
     ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
