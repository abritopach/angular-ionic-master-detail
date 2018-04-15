import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/tutorial', pathMatch: 'full' },
    // { path: 'app', loadChildren: './pages/menu/menu.module#MenuModule' },
    {
      path: 'tutorial',
      loadChildren: './pages/tutorial/tutorial.module#TutorialModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
