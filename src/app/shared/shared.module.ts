import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RemoveWhiteSpacePipe } from './pipes/remove-whitespace.pipe'

@NgModule({
    declarations: [RemoveWhiteSpacePipe],
    imports: [CommonModule, RouterModule, NgbModule],
    exports: [CommonModule, RouterModule, NgbModule, RemoveWhiteSpacePipe],
})
export class SharedModule {}
