import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '@shared/shared.module'
import { HistoryComponent } from './components/history.component'

const routes: Routes = [
    {
        path: '',
        component: HistoryComponent,
    },
    { path: '**', redirectTo: '/' },
]

@NgModule({
    declarations: [HistoryComponent],
    imports: [SharedModule, RouterModule.forChild(routes)],
    providers: [],
})
export class HistoryModule {}
