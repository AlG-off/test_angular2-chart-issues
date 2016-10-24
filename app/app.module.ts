import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http/';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent }   from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { BarChartComponent } from './components/chart/chart-item/chart-item.component';
import { ChartService } from './shared/chart.service';

@NgModule({
    imports: [ 
        BrowserModule,
        HttpModule,
        ChartsModule
    ],
    declarations: [
        AppComponent,
        ChartComponent,
        BarChartComponent
    ],
    providers: [ ChartService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
