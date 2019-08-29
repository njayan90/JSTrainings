import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BodyComponent} from './body/body.component';
import { LoginComponent } from './login/login.component';
const routes:Routes=[
  {path:'news', component:BodyComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
