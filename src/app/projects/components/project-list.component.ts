import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ProjectService } from '../services/project.service'
import { Project } from '../types/project'

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
})
export class ProjectListComponent implements OnInit {
    projects: Project[] | undefined = undefined
    projectsLoading: boolean = false
    projectsFetchError: string | null = null

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.fetchProjects()
    }

    private fetchProjects() {
        this.projectsLoading = true
        this.projectsFetchError = null
        this.projectService
            .getProjects()
            .subscribe({
                next: (projects) => {
                    this.projects = projects
                },
                error: (error: HttpErrorResponse) => {
                    this.projectsFetchError = error.statusText
                },
            })
            .add(() => {
                this.projectsLoading = false
            })
    }
}
