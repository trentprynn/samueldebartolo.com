import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Project } from '@projects/types/project'

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    constructor(private http: HttpClient) {}

    public getProjects() {
        return this.http.get<Project[]>('/api/projects/projects.json')
    }
}
