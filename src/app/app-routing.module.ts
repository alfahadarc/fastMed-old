import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { HomepageComponent } from './components/homepage/homepage.component';


const routes: Routes = [
  {path:"home", component:HomepageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'addproduct', component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
