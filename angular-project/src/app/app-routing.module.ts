import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KlubDetailComponent } from './klub-detail/klub-detail.component';
import { KlubyComponent } from './kluby/kluby.component';

const routes: Routes = [
  { path: 'kluby', component: KlubyComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: KlubDetailComponent}
            
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
