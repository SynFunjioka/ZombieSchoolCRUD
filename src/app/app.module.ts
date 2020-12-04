import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphsComponent } from './pages/graphs/graphs.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { TitleComponent } from './shared/title/title.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { RegistroComponent } from './registro/registro.component';
import { appRouting } from './app.routes';
import { ZombiesComponent } from './zombies/zombies.component';
import { CerebrosComponent } from './cerebros/cerebros.component';
import { SettingsService } from './services/settings.service';
import { HttpClientModule } from '@angular/common/http';
import { ZombiesModalsComponent } from './modal/zombies/zombiesModals.component';
import { CerebrosModalComponent } from './modal/cerebros-modal/cerebros-modal.component';
import { ZombiesModalEditComponent } from './modal/zombies-modal-edit/zombies-modal-edit.component';
import { AuthService } from './services/auth.service';
import { PedidosCerebrosComponent } from './cerebros/pedidos-cerebros/pedidos-cerebros.component';
import { UserEditComponent } from './src/app/modal/user-edit/user-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    GraphsComponent,
    HeaderComponent,
    SidemenuComponent,
    TitleComponent,
    SettingsComponent,
    RegistroComponent,
    ZombiesComponent,
    ZombiesModalsComponent,
    CerebrosComponent,
    CerebrosModalComponent,
    ZombiesModalEditComponent,
    PedidosCerebrosComponent,
    UserEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    appRouting,
    FormsModule,
    HttpClientModule
  ],
  providers: [SettingsService, AuthService],
  bootstrap: [AppComponent],

})
export class AppModule { }
