import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';





@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})




export class QuestionsComponent implements OnInit {
comment : string ; 
comments : any ; 
post: string ; 
posts : any []= [
  {
    userName : 'Hamdi Rhibi',
    userImage :'https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg',
    datePub : '19/04/2020' , 
    like : 52 , 
    postDescription : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sedquia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima  veniam, quinostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?  Quis autem   vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.' 
    ,
    dislike : 525 ,
    comments :   [
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
  
  }
  ,
  {
    userName : 'Sylvester the Cat',
    userImage :'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
    datePub : '11/04/2020' , 
    postDescription : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sedquia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima  veniam, quinostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?  Quis autem   vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.' ,
    like : 52 , 
    dislike : 525 ,
    comments :   [
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
  
  },
  {
    userName : 'Hamdi Rhibi',
    userImage :"https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg",
    datePost : '19/04/2020' ,
    postDescription : 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sedquia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima  veniam, quinostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?  Quis autem   vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.' 
    ,like : 52 , 
    dislike : 525 ,
    comments :  [
      {
        userName : "Miley Steward" ,  
        userImage : "https://mdbootstrap.com/img/Photos/Avatars/img (20).jpg" ,
        userDescription: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." ,
        like : 5 , 
        dislike : 8 
      }]
  }
  ,
  {
    userName : 'Sylvester the Cat',
    userImage :'https://mdbootstrap.com/img/Photos/Avatars/img (27).jpg',
    datePub : '11/04/2020' , 
    like : 52 , 
    dislike : 525 ,
    comments :   [
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
  
  },
  






] ; 

  constructor(private postServices : PostService) { }

  ngOnInit(): void {
 
    this.comments= this.postServices.comments ; 
    console.log(this.posts)
  }


 addcomment(){


 }



  postSomething(){
    if (this.post.length>0) {
    this.posts.push({
      userName : 'Hamdi Rhibi',
      userImage :"https://mdbootstrap.com/img/Photos/Avatars/img (21).jpg",
      datePost : '19/04/2020' ,
      postDescription : this.post 
      ,like : 0 , 
      dislike : 0 ,
      comments :  []
    })
    this.posts.reverse();
    this.post=''; 
  
  }

  }




}
