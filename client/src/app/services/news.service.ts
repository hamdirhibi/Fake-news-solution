import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
const   apiUrl= 'https://newsapi.org/v2';
let apiChat :'http://51.79.27.231:5000/ask/api/v1.0/' ;
const apiKey =  '4d97ac9b1619491ca1eccf0687e0305e';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

 private articleSource = new BehaviorSubject<any> ({}) ; 
 currentarticle = this.articleSource.asObservable(); 


  constructor(private http : HttpClient) { }
  
  getData(url) {
    return this.http.get(`${apiUrl}/${url}&apiKey=${apiKey}`);
 //   return this.http.get('http://newsapi.org/v2/top-headlines?country=fr&&pageSize=5&page=1&&apiKey=4d97ac9b1619491ca1eccf0687e0305e');
  }

  setArticle(article ){
    this.articleSource.next(article) ; 
  }



}
