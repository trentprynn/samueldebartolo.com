import { Component, OnDestroy } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter, Subject, takeUntil } from 'rxjs'

@Component({
    selector: 'sd-nav',
    templateUrl: './nav.component.html',
})
export class NavComponent implements OnDestroy {
    private ngUnsubscribe = new Subject<void>()

    url: string = this.router.url

    constructor(private router: Router) {
        router.events
            .pipe(takeUntil(this.ngUnsubscribe))
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event) => {
                event = event as NavigationEnd
                this.url = event.url
            })
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next()
        this.ngUnsubscribe.complete()
    }
}
