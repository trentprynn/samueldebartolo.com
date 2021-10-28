import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '@shared/shared.module'
import { AboutComponent } from './components/about.component'

const routes: Routes = [{ path: '', component: AboutComponent }]

@NgModule({
    declarations: [AboutComponent],
    imports: [SharedModule, RouterModule.forChild(routes)],
    providers: [],
})
export class AboutModule {}
