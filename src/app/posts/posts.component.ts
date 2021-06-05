import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import {PostServicesService} from '../post-services.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FeedService } from '../feed.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit  {
  post:any;
  feed;
  title;
  body;
  appState='default';




  constructor(private authService:AuthServiceService,
    private feedService:FeedService,
    public dialog: MatDialog){}
  navLinks = [
    {location:'../posts',label:'User posts'},
    { location: '../otherPosts', label: 'Other Posts'},

  ];
  ngOnInit():void {
    this.authService.getData().subscribe(data=>{
     this.post=data


    });
    this.feed=this.feedService.getFeed();

  }
  addFeed() {
    let newFeed = {
      title: this.title,
      body:this.body
    }
    this.feed.push(newFeed);

    this.feedService.addFeed(newFeed);

  }

}







