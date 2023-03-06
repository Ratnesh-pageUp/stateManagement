import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './pages/blog/blog.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { FilterOptionComponent } from './components/filter-option/filter-option.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { NgxsModule } from '@ngxs/store'
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { BlogState } from './store/states/blog.state';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ProfileComponent,
    HomeComponent,
    BlogDetailComponent,
    BlogItemComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ContainerComponent,
    FilterOptionComponent,
    PageNotFoundComponent,
    WelcomePageComponent,
    LoadingComponent,
    ContactComponent,
    ErrorComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgxsModule.forRoot([BlogState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
