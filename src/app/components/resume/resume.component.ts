import { Component } from '@angular/core'
import {PostsService} from '../../services/posts.service'


@Component({
  moduleId : module.id,
  styles : [`host {display: block;}`],
  selector: 'resume',
  templateUrl: 'resume.component.html',
//   template:`
//     <h1>hello {{name}}</h1>
//     <p><strong>Email:</strong>{{email.address}}{{email.domain}}</p>
// `,
  providers : [PostsService]
})

export class ResumeComponent {

  name : string;
  email : email;

  constructor(private postsService : PostsService){

    this.name = 'Nakul Resume';
    this.email = {
      address : 'nakulchawla',
      domain: '@gmail.com'
    }
    // this.postsService.getPosts().subscribe(){
    // console.log(posts);
    // };

  }

}
interface email {
  address:string;
  domain:string;
}
