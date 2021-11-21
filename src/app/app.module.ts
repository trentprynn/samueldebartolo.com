import { NgModule } from '@angular/core'
import { SharedModule } from '@shared/shared.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'

@NgModule({
    declarations: [AppComponent],
    imports: [CoreModule, SharedModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
