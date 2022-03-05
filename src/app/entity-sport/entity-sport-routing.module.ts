import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IteamDetailsComponent } from './iteam-details/iteam-details.component';
import { LiveMatchComponent } from './live-match/live-match.component';
import { ResultMatchComponent } from './result-match/result-match.component';
import { UpcomingMatchComponent } from './upcoming-match/upcoming-match.component';

const routes: Routes = [
  {
    path:"",
    component:LiveMatchComponent
  },
  {
    path:"upcoming-match",
    component:UpcomingMatchComponent

  },
  {
    path:"result-match",
    component:ResultMatchComponent
  },
  {
    path:"iteam-view/:id",
    component:IteamDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntitySportRoutingModule { }
