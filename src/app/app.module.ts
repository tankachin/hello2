import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { DepartmentCreateComponent } from './components/department-create/department-create.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
import { BrandCreateComponent } from './components/brand-create/brand-create.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandEditComponent } from './components/brand-edit/brand-edit.component';
import { CategoryCreateComponent } from './components/category-create/category-create.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    CustomerEditComponent,
    ProductCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    CategoryCreateComponent,
    CategoryListComponent,
    CategoryEditComponent,
    DepartmentCreateComponent,
    DepartmentListComponent,
    DepartmentEditComponent,
    BrandCreateComponent,
    BrandListComponent,
    BrandEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
