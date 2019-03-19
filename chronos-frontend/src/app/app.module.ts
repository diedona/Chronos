import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { LoginModule } from './login/login.module';
import { BaseModule } from './shared/base/base.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './shared/services/interceptors/http-interceptor';
import { ToastrModule } from 'ngx-toastr';
import toastrConfigurations from './shared/configurations/toastr-configurations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { RegistrarComponent } from './registrar/registrar.component';
import { ConfirmarEmailComponent } from './confirmar-email/confirmar-email.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    ConfirmarEmailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BaseModule,
    LayoutModule,
    LoginModule,
    ToastrModule.forRoot(toastrConfigurations),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
