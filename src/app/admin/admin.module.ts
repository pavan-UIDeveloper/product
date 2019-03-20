import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/addproduct.component';
import {Routes,RouterModule} from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AdminHomeComponent } from './admin-home/admin-home.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const route: Routes=[
     {path:'',component:AdminHomeComponent,children:[
       {path:'addProduct',component:AddproductComponent},
       {path:'addCategory',component:CategoriesComponent}
      ]}
  ]

@NgModule({
  declarations: [AddproductComponent, CategoriesComponent, AdminHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(route)
  ]
})
export class AdminModule { }
