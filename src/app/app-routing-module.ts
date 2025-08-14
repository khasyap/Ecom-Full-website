import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Addproducts } from './addproducts/addproducts';
import { Navbar } from './navbar/navbar';
import { Manageproducts } from './manageproducts/manageproducts';

const routes: Routes = [
  {path:'',component:Navbar,
    children:[
      {path:'home',component:Home},
      {path:'add',component:Addproducts},
      {path:'manage',component:Manageproducts}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
