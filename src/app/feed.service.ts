import { Injectable } from '@angular/core';
import { Init } from './init-posts';

@Injectable({
  providedIn: 'root'
})
export class FeedService extends Init {

  constructor() {
    super();
    console.log('FeedService Works');
    this.load();
   }
   getFeed() {
    let feed = JSON.parse(localStorage.getItem('feed')||'{}');
    return feed;
  }
  addFeed(newfeed) {
    let feed = JSON.parse(localStorage.getItem('feed')||'{}');
    // Add New TodoService
    feed.push(newfeed);
    // Set New Todos
    localStorage.setItem('feed', JSON.stringify(feed));
 }
}
