"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var posts_service_1 = require('../../services/posts.service');
var ResumeComponent = (function () {
    function ResumeComponent(postsService) {
        this.postsService = postsService;
        this.name = 'Nakul Resume';
        this.email = {
            address: 'nakulchawla',
            domain: '@gmail.com'
        };
        // this.postsService.getPosts().subscribe(){
        // console.log(posts);
        // };
    }
    ResumeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styles: ["host {display: block;}"],
            selector: 'resume',
            templateUrl: 'resume.component.html',
            //   template:`
            //     <h1>hello {{name}}</h1>
            //     <p><strong>Email:</strong>{{email.address}}{{email.domain}}</p>
            // `,
            providers: [posts_service_1.PostsService]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService])
    ], ResumeComponent);
    return ResumeComponent;
}());
exports.ResumeComponent = ResumeComponent;
//# sourceMappingURL=resume.component.js.map