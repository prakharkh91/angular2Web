"use strict";
var router_1 = require('@angular/router');
var resume_component_1 = require('./components/resume/resume.component');
var about_component_1 = require('./components/about/about.component');
var home_component_1 = require('./components/home/home.component');
var appRoutes = [
    {
        path: 'resume',
        component: resume_component_1.ResumeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
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
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map