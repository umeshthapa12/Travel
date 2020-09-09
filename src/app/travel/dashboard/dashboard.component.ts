import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: []
})
export class DashboardComponent implements OnInit, OnDestroy {

    private readonly toDestroy$ = new Subject<null>();

    constructor(
        private fb: FormBuilder
    ) { }

    tripForm: FormGroup;

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.tripForm = this.fb.group({
            id: null,
            address: null,
            checkIn: null,
            checkout: null
        });
    }

    ngOnDestroy() {
        this.toDestroy$.next();
        this.toDestroy$.complete();
    }
}
