/**
 * Created by princechawla on 2/18/17.
 */
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()

export class PostsService {

  constructor(private http : Http){
    console.log('PostsService Initialised');


    }
  // getPosts(){
  //   return this.http.get("some http link with json in it")
  //     .map(res => res.json());
  // }
}

