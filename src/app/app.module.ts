import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { LazyLoadImageModule } from 'ng-lazyload-image'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component'
import { ProjectListComponent } from './projects/project-list.component'
import { RemoveWhiteSpacePipe } from './shared/pipes/remove-whitespace.pipe'

@NgModule({
    declarations: [AppComponent, ProjectListComponent, RemoveWhiteSpacePipe],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        LazyLoadImageModule,
        NgbModule,
    ],
    providers: [RemoveWhiteSpacePipe],
    bootstrap: [AppComponent],
})
export class AppModule {}
