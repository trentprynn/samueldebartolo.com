import { NgModule } from '@angular/core'
import { SharedModule } from '@shared/shared.module'
import { ProjectListComponent } from './components/project-list.component'
import { ProjectsRoutingModule } from './projects-routing.model'

@NgModule({
    declarations: [ProjectListComponent],
    imports: [SharedModule, ProjectsRoutingModule],
    providers: [],
})
export class ProjectsModule {}
