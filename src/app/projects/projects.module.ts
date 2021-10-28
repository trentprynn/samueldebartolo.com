import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '@shared/shared.module'
import { ProjectListComponent } from './components/project-list.component'

const routes: Routes = [{ path: '', component: ProjectListComponent }]

@NgModule({
    declarations: [ProjectListComponent],
    imports: [SharedModule, RouterModule.forChild(routes)],
    providers: [],
})
export class ProjectsModule {}
