import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'',component:WelcomePageComponent},
  {path:'home',component:HomeComponent},
  {path:'blog',component:BlogComponent},
  {path:'blogdetail/:id',component:BlogDetailComponent},
  {path:'profile',component:ProfileComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
