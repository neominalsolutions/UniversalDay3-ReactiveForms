import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModelSampleComponent } from './ng-model/ng-model-sample/ng-model-sample.component';
import ProfilePageComponent from './pages/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
  },
  {
    path: 'ng-model',
    component: NgModelSampleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
