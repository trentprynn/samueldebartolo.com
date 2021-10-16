import { Component } from '@angular/core'

import { Project } from '@projects/models/project'
import { ProjectService } from '@projects/services/project.service'
import { Observable } from 'rxjs'
import { Image } from '@projects/models/image.model'

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
    defaultImage: Image
    projects$: Observable<Project[]>

    constructor(private projectService: ProjectService) {
        // setup list of projects
        this.projects$ = this.projectService.getProjects()

        // setup default image that is used while images are lazy loading
        this.defaultImage = this.projectService.getDefaultProjectImage()
    }
}
