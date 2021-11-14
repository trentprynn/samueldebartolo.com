import { Component } from '@angular/core'

import { Project } from '@projects/models/project'
import { ProjectService } from '@projects/services/project.service'
import { Observable } from 'rxjs'

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
    projects$: Observable<Project[]>

    constructor(private projectService: ProjectService) {
        // setup list of projects
        this.projects$ = this.projectService.getProjects()
    }
}
