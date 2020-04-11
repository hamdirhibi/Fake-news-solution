import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  page : number = 1 ; 
  data : any ; 
  constructor(private newsService : NewsService,
              private http : HttpClient,
              private router : Router 
    ){
  
  }
  ngOnInit(): void {
      this.load();
  }


  load() {
    this.newsService
    .getData(
      `top-headlines?country=us&&category=health&&pageSize=5&&page=${
        this.page
      }`
    )
    .subscribe(data => {
      console.log(data);
      this.data = data;
    });
   
  }



  onscroll() {
    this.page++;
    this.http
    .get("https://newsapi.org/v2/top-headlines?country=us&&category=health&&pageSize=5&page="+this.page+"&&apiKey=4d97ac9b1619491ca1eccf0687e0305e")
    .subscribe(data => {
      for (const article of data['articles']) {
        this.data.articles.push(article);
      }
     // event.target.complete();
      console.log(this.data); 
    });
  
  }


   gotoitem(article){
      this.newsService.setArticle(article);
      this.router.navigate(['/newsItem'])
   }



}
