import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderCenterComponent } from './header/header-center/header-center.component';
import { HeaderBottomComponent } from './header/header-bottom/header-bottom.component';
import { HttpClientModule } from '@angular/common/http';
import { AddArticleComponent } from './add-article/add-article.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HeaderTopComponent,
    HeaderCenterComponent,
    HeaderBottomComponent,
    AddArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
