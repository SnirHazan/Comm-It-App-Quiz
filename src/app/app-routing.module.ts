import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './header/about-us/about-us.component';
import { QuestionsPagingComponent } from './questions-paging/questions-paging.component';
import {SummaryComponent} from './summary/summary.component';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'Quiz', component: QuestionsPagingComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Summary', component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
