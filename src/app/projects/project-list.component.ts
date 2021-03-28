import { Component, OnInit } from '@angular/core'

import { Project } from './project'
import { ProjectService } from './project.service'

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
    defaultImage: any
    projects: Project[] = []

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        // setup list of projects
        this.projectService.getProjects().subscribe({
            next: (projects) => {
                this.projects = projects
            },
        })

        // setup default image that is used while images are lazy loading
        this.defaultImage = this.projectService.getDefaultProjectImage()
    }
}
