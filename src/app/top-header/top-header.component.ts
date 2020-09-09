import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'top-header',
    templateUrl: './top-header.component.html',
    styles: [`
    .submenu {
        display: none;
    }
    .dropdown:hover .submenu {display:block}

    .sub{
        display: none;
    }

    .sub-drop:hover .sub{display: block}
    `]
})
export class TopHeaderComponent implements OnInit {
    flag: boolean = false;
    lang: boolean = false;

    showDropdown() {
        if (!this.lang) {
            this.flag = !this.flag;
        } else {
            this.lang = false;
            this.flag = true;
        }
    }

    langDropdown() {
        if (!this.flag) {
            this.lang = !this.lang;
        } else {
            this.flag = false;
            this.lang = true;
        }
    }



    ngOnInit(): void { }
}
