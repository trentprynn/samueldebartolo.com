import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Project } from '@projects/models/project'
import { Image } from '@projects/models/image.model'

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    constructor(private http: HttpClient) {}

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>('/api/projects/projects.json')
    }
}
