import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { SharedModule } from 'src/app/shared/shared.module'
import { ProjectListComponent } from './project-list.component'

describe('ProjectListComponent', () => {
    let component: ProjectListComponent
    let fixture: ComponentFixture<ProjectListComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, SharedModule],
            declarations: [ProjectListComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectListComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
