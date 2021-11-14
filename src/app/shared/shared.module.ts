import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Attributes, IntersectionObserverHooks, LazyLoadImageModule, LAZYLOAD_IMAGE_HOOKS } from 'ng-lazyload-image'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RemoveWhiteSpacePipe } from './pipes/remove-whitespace.pipe'
import { debounceTime } from 'rxjs'

class LazyLoadImageHooks extends IntersectionObserverHooks {
    getObservable(attributes: Attributes) {
        // add debounce time to lazy loaded images to prevent
        // mass image loading while quickly scrolling
        return super.getObservable(attributes).pipe(debounceTime(250))
    }
}

@NgModule({
    declarations: [RemoveWhiteSpacePipe],
    imports: [CommonModule, RouterModule, LazyLoadImageModule, NgbModule],
    exports: [CommonModule, RouterModule, LazyLoadImageModule, NgbModule, RemoveWhiteSpacePipe],
    providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: LazyLoadImageHooks }],
})
export class SharedModule {}
