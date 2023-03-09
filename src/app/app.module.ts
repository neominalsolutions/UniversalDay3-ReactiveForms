import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import ProfilePageComponent from './pages/profile-page/profile-page.component';
import { NgModelSampleComponent } from './ng-model/ng-model-sample/ng-model-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    FormDemoComponent,
    ProfilePageComponent,
    NgModelSampleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
