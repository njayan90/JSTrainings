import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BodyComponent} from './body/body.component';
import { AuthGuardService } from './auth-guard.service';
import { AddArticleComponent } from './add-article/add-article.component';
const routes:Routes=[
  {path:'news', canActivate:[AuthGuardService], component:BodyComponent},
  {path:'add-article', canActivate:[AuthGuardService], component:AddArticleComponent}
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
