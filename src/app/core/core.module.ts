import { HttpClientModule } from '@angular/common/http'
import { NgModule, Optional, SkipSelf } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouteReuseStrategy } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { FooterComponent } from './components/footer/footer.component'
import { NavComponent } from './components/nav/nav.component'
import { CustomRouteReuseStrategy } from './routing/custom-route-reuse.strategy'

@NgModule({
    declarations: [NavComponent, FooterComponent],
    providers: [{ provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }],
    imports: [SharedModule, BrowserModule, BrowserAnimationsModule, HttpClientModule],
    exports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, NavComponent, FooterComponent],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in AppModule only')
        }
    }
}
