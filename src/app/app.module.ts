import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './layouts/components/header/header.component';
import { NavSidebarComponent } from './layouts/components/nav-sidebar/nav-sidebar.component';
import { CoverPageComponent } from './layouts/components/cover-page/cover-page.component';
import { MainPageComponent } from './layouts/components/main-page/main-page.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { PageLoaderComponent } from './layouts/components/page-loader/page-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavSidebarComponent,
    CoverPageComponent,
    MainPageComponent,
    FooterComponent,
    PageLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
