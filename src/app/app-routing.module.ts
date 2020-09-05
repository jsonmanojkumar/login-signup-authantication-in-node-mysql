import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {AuthGuard} from './auth/auth.guard';
const routes: Routes = [
  // {path:'',component:DefaultLayoutComponent,children:DEFAULE_ROUTES},
  {
    path: '',
    loadChildren: () => (import('./auth/auth.module').then(m => m.AuthModule))
  },
  {
    path: 'dashboard',
    loadChildren: () => (import('./dashboard/dashboard.module').then(m => m.DashboardModule)),
    canLoad: [AuthGuard]
  },

  
  
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
