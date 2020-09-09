import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TopHeaderComponent } from './top-header/top-header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './travel/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopHeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, PerfectScrollbarModule,
    RouterModule.forRoot([
      {path: 'main/travel/dashboard', component: DashboardComponent},
      {path: '', redirectTo: 'main/travel/dashboard', pathMatch: 'full'},
    ]),
    FormsModule, ReactiveFormsModule, MatDatepickerModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
