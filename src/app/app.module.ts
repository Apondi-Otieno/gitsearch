import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ProfileServiceComponent } from './profile-service/profile-service.component';
import { ProfileClassComponent } from './profile-class/profile-class.component';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    SearchFormComponent,
    ProfileServiceComponent,
    ProfileClassComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
