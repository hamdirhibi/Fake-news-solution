import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

interface Comment {
  userName : string ; 
  userImage : string ; 
  userDescription : string ; 
  like : number ; 
  dislike : number;
}


@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  article ;
  comment : string; 
  comments :  Comment []=  [
    {
      userName : "Miley Steward" ,  
      userImage : "https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" ,
      userDescription: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ,
      like : 5 , 
      dislike : 8 
    },
    {
      userName : "Caroline Horwitz" ,  
      userImage : "https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg" ,
      userDescription: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatu  delenit atque corrupti  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt i culp  officia deserunt mollitia animi, id est laborum et dolorum fuga." ,
      like : 5 , 
      dislike : 48 
    },
    {
      userName : "Tommy Smith" ,  
      userImage : "https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg" ,
      userDescription: " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,." ,
      like : 545 , 
      dislike : 8 
    },
    {
      userName : "Sylvester the Cat" ,  
      userImage : "https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg" ,
      userDescription: "               Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed  " ,
      like : 5 , 
      dislike : 18 
    },
    
  ]
  constructor(private newsService : NewsService,
  
       private router : Router 

    ) { }

  ngOnInit(): void {
    this.newsService.currentarticle.subscribe(data =>{
      this.article = data  ; 
      this.article.comments = this.comments ; 
    })
    if (this.article.title==undefined) this.router.navigate(['home'])
  }

addcomment(){
  //console.log(this.comment)
  if (this.comment.length>0){
  this.comments.push({
    userName : "Hamdi Rhibi" ,  
    userImage : "https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg" ,
    userDescription: this.comment ,
    like : 5 , 
    dislike : 18 
  }) ; 
  this.comment=""
}


}
}
