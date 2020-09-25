import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from './guards/auth.guard';
import { UserExistGuaard } from './guards/user-exist.guard';
import { AddPostPageComponent } from './add-post-page/add-post-page.component';

const routes: Routes = [
   { path: 'main', component: MainPageComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginPageComponent, canActivate: [UserExistGuaard] },
   { path: 'addpost', component: AddPostPageComponent, canActivate: [AuthGuard] },
   { path: '**', redirectTo: 'main' }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class AppRoutingModule {

}