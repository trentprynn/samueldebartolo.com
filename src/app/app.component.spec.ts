import { TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { SharedModule } from '@shared/shared.module'
import { AppComponent } from './app.component'
import { CoreModule } from './core/core.module'

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [CoreModule, SharedModule, RouterTestingModule],
            declarations: [AppComponent],
        }).compileComponents()
    }))

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.componentInstance
        expect(app).toBeTruthy()
    })
})
