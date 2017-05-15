import {observable, computed, action} from 'mobx';
import { get, post } from 'axios';

export class TwitterStore {
  @observable tweet;

  constructor(){
    this.tweet = "No tweets";
    this.stream();
  }

  @action stream(){
    /*
      Here, I am calling to my /stream route, defined within server.js. This is essentially
      checking the constant stream, once every second, and updating our prop accordingly.
    */
    setInterval(()=>{
      /*
        Get is a method within axios, which greatly simplifies our Ajax call. Essentially, I'm
        getting the current tweet, and updating my observable to match.
      */
        get('stream').then((res) => {
          this.tweet = res.data;
        })
      },
      1000
    );
  }

  @computed get getTweet(){
    return this.tweet;
  }
}
