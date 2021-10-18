import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { Injectable, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { LazyLoadImageModule } from 'ng-lazyload-image'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { RemoveWhiteSpacePipe } from './pipes/remove-whitespace.pipe'

@NgModule({
    declarations: [RemoveWhiteSpacePipe],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        HttpClientModule,
        LazyLoadImageModule,
        NgbModule,
    ],
    exports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        HttpClientModule,
        LazyLoadImageModule,
        NgbModule,
        RemoveWhiteSpacePipe,
    ],
})
export class SharedModule {}
