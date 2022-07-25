import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ProjectService } from '@projects/services/project.service'
import { Project } from '@projects/types/project'

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
})
export class ProjectListComponent implements OnInit {
    projects: Project[] | undefined = undefined
    projectsLoading: boolean = false
    projectFetchError: string | null = null

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.fetchProjects()
    }

    private fetchProjects() {
        this.projectsLoading = true
        this.projectService
            .getProjects()
            .subscribe({
                next: (projects) => {
                    this.projects = projects
                },
                error: (error: HttpErrorResponse) => {
                    this.projectFetchError = error.statusText
                },
            })
            .add(() => {
                this.projectsLoading = false
            })
    }
}
