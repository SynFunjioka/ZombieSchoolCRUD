import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistroComponent } from './registro/registro.component';
import { ZombiesComponent } from './zombies/zombies.component';
import { CerebrosComponent } from './cerebros/cerebros.component';
import { PedidosCerebrosComponent } from './cerebros/pedidos-cerebros/pedidos-cerebros.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'zombies', component: ZombiesComponent },
    { path: 'cerebros', component: CerebrosComponent },
    { path: 'pedidos/cerebros', component: PedidosCerebrosComponent},
    { path: '**', component: NopagefoundComponent}
];

export const appRouting = RouterModule.forRoot(routes, {useHash: true});
