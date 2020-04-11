import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { SourcesComponent } from './sources/sources.component';
import { VerifyaccountComponent } from './verifyaccount/verifyaccount.component';

const routes: Routes = [
  { path: '', component  : HomeComponent},
  { path  : 'forum' , component : QuestionsComponent },
  { path  : 'news/:id' , component : NewsComponent },
  { path : 'login' ,component:LoginComponent} , 
  { path : 'signup' ,component:SingupComponent} , 
  { path : 'newsItem' ,component:NewsItemComponent} , 
  {path : 'sources' , component : SourcesComponent} , 
  {path : 'verifyaccount' , component : VerifyaccountComponent} , 
  
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}