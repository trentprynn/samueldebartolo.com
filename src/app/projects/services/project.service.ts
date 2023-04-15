import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import projects from 'src/app/data/projects'
import { Project } from '../types/project'

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    constructor() {}

    public getProjects() {
        // simulate an API call response for the projects
        return new Observable<Project[]>((observable) => {
            observable.next(projects)
            observable.complete()
        })
    }
}
