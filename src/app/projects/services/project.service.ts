import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Project } from '../types/project'

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    constructor(private http: HttpClient) {}

    public getProjects() {
        return this.http.get<Project[]>('/api/projects/projects.json')
    }
}
