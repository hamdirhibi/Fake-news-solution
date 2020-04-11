import { Injectable } from '@angular/core';

interface Comment {
  userName : string ; 
  userImage : string ; 
  userDescription : string ; 
  like : number ; 
  dislike : number;
}



@Injectable({
  providedIn: 'root'
})
export class PostService {
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

  constructor() { }
}
