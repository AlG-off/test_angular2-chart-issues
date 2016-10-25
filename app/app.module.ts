import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-chartjs';

import { AppComponent }   from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartService } from './shared/chart.service';

@NgModule({
    imports: [ 
        BrowserModule,
        HttpModule,
        ChartModule
    ],
    declarations: [
        AppComponent,
        ChartComponent
    ],
    providers: [ ChartService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
