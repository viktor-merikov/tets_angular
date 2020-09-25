import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsListItemComponent } from './posts-list-item/posts-list-item.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AddPostPageComponent } from './add-post-page/add-post-page.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    PostsListComponent,
    PostsListItemComponent,
    MainPageComponent,
    AddPostPageComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
