import { EventsService } from './eventsService.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        DashboardRoutingModule,
        FormsModule
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
