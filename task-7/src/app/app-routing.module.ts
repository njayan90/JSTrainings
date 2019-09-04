import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BodyComponent} from './body/body.component';
import { AuthGuardService } from './auth-guard.service';
const routes:Routes=[
  {path:'news', canActivate:[AuthGuardService], component:BodyComponent},
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
