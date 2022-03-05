import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitySportRoutingModule } from './entity-sport-routing.module';
import { LiveMatchComponent } from './live-match/live-match.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { TimerComponent } from './timer/timer.component';
import { UpcomingMatchComponent } from './upcoming-match/upcoming-match.component';
import { ResultMatchComponent } from './result-match/result-match.component';
import { IteamDetailsComponent } from './iteam-details/iteam-details.component';
import { CreateIteamComponent } from './create-iteam/create-iteam.component';
import { CreateContestComponent } from './create-contest/create-contest.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LiveMatchComponent,
    TimerComponent,
    UpcomingMatchComponent,
    ResultMatchComponent,
    IteamDetailsComponent,
    CreateIteamComponent,
    CreateContestComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule,
    EntitySportRoutingModule,
    // ReactiveFormsModule
  ]
})
export class EntitySportModule { }
