import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: DashboardComponent }
        ]), FormsModule, ReactiveFormsModule, MatDatepickerModule
    ],
    exports: [],
    providers: [DashboardService],
})
export class DashboardModule { }
