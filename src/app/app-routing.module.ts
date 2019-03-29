import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityPageComponent } from './modules/activity/activity-page/activity-page.component';
import { StatementPageComponent } from './modules/statements/statement-page/statement-page.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/activity',
    pathMatch: 'full'
  },
  { path: 'activity', component: ActivityPageComponent },
  { path: 'statements', component: StatementPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
