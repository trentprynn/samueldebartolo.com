import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then((m) => m.AboutModule),
    },
    {
        path: '',
        loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsModule),
    },
    { path: '**', redirectTo: '/' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
