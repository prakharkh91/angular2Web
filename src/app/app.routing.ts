/**
 * Created by princechawla on 2/18/17.
 */
import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'


import {ResumeComponent} from './components/resume/resume.component'
import {AboutComponent} from './components/about/about.component'
import {HomeComponent} from './components/home/home.component'

const appRoutes: Routes = [
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
