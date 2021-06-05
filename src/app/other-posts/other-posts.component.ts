import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-other-posts',
  templateUrl: './other-posts.component.html',
  styleUrls: ['./other-posts.component.css']
})
export class OtherPostsComponent implements OnInit {


  constructor(public authService:AuthServiceService) {}
otherpost:any;
navLinks = [
  {location:'../posts',label:'User posts'},
  { location: '../otherPosts', label: 'Other Posts'},

];

ngOnInit(): any {
  const Id= JSON.parse(localStorage.getItem('user')|| '{}');

  this.authService.getOtherPosts().subscribe( (dat)=>{
      this.authService.getAllUserData().subscribe((data) => {
          let usersList = data;
          console.log('LIST', usersList)
          let allPosts = dat as any;
          this.otherpost = allPosts.filter((value) => value.userId!==Id)
          this.mapUserToPost(usersList)
      })
      console.log(this.otherpost)
  });
}

mapUserToPost(userList) : any {
  this.otherpost.forEach(element => {
      element.userName = userList.find(item => item.id === element.userId)?.name;
  });

  console.log('UpdatedPosts', this.otherpost)
}
}


