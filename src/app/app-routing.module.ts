import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { DepartmentCreateComponent } from './components/department-create/department-create.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
import { BrandCreateComponent } from './components/brand-create/brand-create.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandEditComponent } from './components/brand-edit/brand-edit.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-customer' },
  { path: 'create-customer', component: CustomerCreateComponent },
  { path: 'edit-customer/:id', component: CustomerEditComponent },
  { path: 'customers-list', component: CustomerListComponent },
  { path: 'create-product', component: ProductCreateComponent },
  { path: 'edit-product/:id', component: ProductEditComponent },
  { path: 'products-list', component: ProductListComponent },
  { path: 'create-department', component: DepartmentCreateComponent },
  { path: 'edit-department/:id', component: DepartmentEditComponent },
  { path: 'departments-list', component: DepartmentListComponent },
  { path: 'create-brand', component: BrandCreateComponent },
  { path: 'edit-brand/:id', component: BrandEditComponent },
  { path: 'brands-list', component: BrandListComponent },
  { path: 'create-category', component: CategoryCreateComponent },
  { path: 'edit-category/:id', component: CategoryEditComponent },
  { path: 'categorys-list', component: CategoryListComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
