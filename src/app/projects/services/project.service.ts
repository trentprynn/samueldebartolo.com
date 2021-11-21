import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Project } from '@projects/models/project'
import { BehaviorSubject, delay, Observable, ReplaySubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private projectsSubject: ReplaySubject<Project[]> = new ReplaySubject<Project[]>(1)
    public projects: Observable<Project[]> = this.projectsSubject.asObservable()

    private projectsLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
    public projectsLoadings: Observable<boolean> = this.projectsLoadingSubject.asObservable()

    private projectsErrorSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null)
    public projectsError = this.projectsErrorSubject.asObservable()

    constructor(private http: HttpClient) {
        this.projectsLoadingSubject.next(true)
        this.http
            .get<Project[]>('/api/projects/projects.json')
            .pipe(delay(1000))
            .subscribe({
                next: (projects) => {
                    this.projectsSubject.next(projects)
                },
                error: (error) => {
                    this.projectsErrorSubject.next(error)
                },
            })
            .add(() => {
                // on-complete, regardless of error
                this.projectsLoadingSubject.next(false)
            })
    }
}
