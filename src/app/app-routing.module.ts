import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ConnectComponent } from './pages/connect/connect.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:'',component:LoginComponent},

    {path:'',component:HomeComponent},
    {path:'product',component:ProductsComponent},
    {path:'about',component:AboutusComponent},

    // {path:'about',component:AboutComponent},
    {path:'contact',component:ConnectComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
