//require('expose-loader?adal!../../node_modules/adal-angular/lib/adal.js');
//require('expose-loader?adal-angular!../../node_modules/adal-angular/lib/adal-angular.js');

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar.component';
import { FooterComponent } from './shared/footer.component';
import { FlightsComponent } from './flights/flights.component';
import { SeatsComponent } from './seats/seats.component';
import { DealsComponent } from './shared/deals.component';
import { SearchComponent } from './shared/search.component';
import { HomeComponent } from './home/home.component';
import { CityComponent } from './city/city.component';
import { LoadingComponent } from './shared/loading.component';
import { CityVideoComponent } from './city-video/city-video.component';
import { BookingComponent } from './booking/booking.component';
import { DaysComponent } from './flights/days.component';
import { OptionsComponent } from './flights/options.component';
import { ResultsComponent } from './flights/results.component';
import { BookingService } from './shared/booking.service';
import { AdalService } from 'ng2-adal/core';
import { GuardService } from './shared/guard.service';
import { AuthService } from './shared/auth.service';
import { UTCPipe } from './shared/utc.pipe';
import { routing } from './app.routes';
import { ChartsModule } from 'ng2-charts';
import { PopupModule } from 'ng2-opd-popup';
import { CodeshareComponent } from './codeshare/codeshare.component';
import { KeysValue } from './shared/keyvalue.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        DealsComponent,
        FlightsComponent,
        SeatsComponent,
        SearchComponent,
        HomeComponent,
        LoadingComponent,
        CityComponent,
        CityVideoComponent,
        BookingComponent,
        OptionsComponent,
        ResultsComponent,
        DaysComponent,
        UTCPipe,
        CodeshareComponent,
        KeysValue
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        NgbModule.forRoot(),
        ChartsModule,
        PopupModule.forRoot(),
        AngularFontAwesomeModule
    ],
    providers: [BookingService, AuthService, GuardService, AdalService],
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor(private adalService: AdalService, private authService: AuthService) {
        //adal service init
        this.adalService.init(this.authService.adalConfig);
        this.adalService.handleWindowCallback();
        this.adalService.getUser();
    }
}
