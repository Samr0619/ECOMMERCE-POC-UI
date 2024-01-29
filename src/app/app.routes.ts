import { Routes } from '@angular/router';
import { HomeComponent } from './homelogin/home/home.component';
import { RegisterFormComponent } from './homelogin/register-form/register-form.component';
import { LoginFormComponent } from './homelogin/login-form/login-form.component';
import { SearchResultsComponent } from './homelogin/search-results/search-results.component';
import { UserComponent } from './homelogin/user/user.component';
import { AdminComponent } from './homelogin/admin/admin.component';
import { ResetPasswordComponent } from './homelogin/reset-password/reset-password.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'ecom-poc/home', pathMatch:'full'
    },
    {
        path:'ecom-poc/home',
        component: HomeComponent
    },
    {
        path:'ecom-poc/register',
        component: RegisterFormComponent
    },
    {
        path:'ecom-poc/login',
        component: LoginFormComponent
    },
    {
        path:'ecom-poc/search/results',
        component: SearchResultsComponent
    },
    {
        path: 'ecom-poc/user',
        component: UserComponent
    },
    {
        path: 'ecom-poc/admin',
        component: AdminComponent
    },
    {
        path: 'ecom-poc/reset/password',
        component: ResetPasswordComponent
    }

];
