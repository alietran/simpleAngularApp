import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { FilterStatusPipe } from './Pipe/filter-status.pipe';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    AddUserComponent,
    FilterStatusPipe,
    EditUserComponent
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
     BrowserAnimationsModule,
      MatSelectModule,
      MatSlideToggleModule,
     MatToolbarModule,
     MatIconModule,
     MatDatepickerModule,
     MatNativeDateModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
