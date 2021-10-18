import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

import { SharedModule } from '@shared/shared.module'
import { AppRoutingModule } from './app-routing.module'
import { ProjectsModule } from '@projects/projects.module'
import { AboutModule } from './about/about.module'

@NgModule({
    declarations: [AppComponent],
    imports: [SharedModule, ProjectsModule, AboutModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
