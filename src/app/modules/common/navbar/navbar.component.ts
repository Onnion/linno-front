import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MobileAdapter } from 'src/app/helpers/mobileAdapter/mobileAdapter';

const misc: any = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};

@Component({
    selector: 'app-navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent extends MobileAdapter implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    public shouldShowFilters = false;
    mobile_menu_visible: any = 0;

    @ViewChild('app-navbar-cmp') button: any;

    constructor(private element: ElementRef, private router: Router) {
        super();
        this.sidebarVisible = false;
    }

    private setShouldShowFilters(url: string): void {
        this.shouldShowFilters = url.includes('jogga') || url.includes('cliente');
    }

    private sidebarOpen() {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        setTimeout(function () {
            $toggle.classList.add('toggled');
        }, 430);

        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');


        if (body.querySelectorAll('.main-panel')) {
            document.getElementsByClassName('main-panel')[0].appendChild($layer);
        } else if (body.classList.contains('off-canvas-sidebar')) {
            document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
        }

        setTimeout(function () {
            $layer.classList.add('visible');
        }, 100);

        $layer.onclick = function () { //asign a function
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            this.sidebarVisible = false;

            $layer.classList.remove('visible');
            setTimeout(function () {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
        }.bind(this);

        body.classList.add('nav-open');
        this.mobile_menu_visible = 1;
        this.sidebarVisible = true;
    };

    public minimizeSidebar() {
        const body = document.getElementsByTagName('body')[0];

        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;

        } else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');

                misc.sidebar_mini_active = true;
            }, 300);
        }

        const simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);

        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    }
 
    public sidebarClose() {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        var $layer = document.createElement('div');

        $layer.setAttribute('class', 'close-layer');


        this.sidebarVisible = false;

        body.classList.remove('nav-open');

        if ($layer) {
            $layer.remove();
        }

        setTimeout(function () {
            $toggle.classList.remove('toggled');
        }, 400);

        this.mobile_menu_visible = 0;
    };

    public sidebarToggle() {
        this[this.sidebarVisible ? 'sidebarClose' : 'sidebarOpen']();
    }

    ngOnInit() {
        this.setIsMobile();
        const navbar: HTMLElement = this.element.nativeElement;
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

        this.setShouldShowFilters(this.router.url);

        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }

        if (body.classList.contains('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }

        this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            const $layer = document.getElementsByClassName('close-layer')[0];

            this.sidebarClose();
            this.setShouldShowFilters(event.url);

            if ($layer) {
                $layer.remove();
            }
        });
    }
}
