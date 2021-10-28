import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LazyLoadImageModule } from 'ng-lazyload-image'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RemoveWhiteSpacePipe } from './pipes/remove-whitespace.pipe'

@NgModule({
    declarations: [RemoveWhiteSpacePipe],
    imports: [
        CommonModule,
        RouterModule,
        LazyLoadImageModule,
        NgbModule,
    ],
    exports: [
        CommonModule,
        RouterModule,
        LazyLoadImageModule,
        NgbModule,
        RemoveWhiteSpacePipe,
    ],
})
export class SharedModule {}
