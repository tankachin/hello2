import { Product } from '../../model/Product';
import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-edit',
  templateUrl: './Product-edit.component.html',
  styleUrls: ['./Product-edit.component.css']
})

export class ProductEditComponent implements OnInit {
  submitted = false;
  customerForm: FormGroup;
  CustomerCategory: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  // Choose designation with select dropdown
  updateProfile(e) {
    this.customerForm.get('designation').setValue(e, {
      onlySelf: true
    });
  }

  // Getter to access form control
  get myForm() {
    return this.customerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.customerForm.valid) {
      return false;
    } else {
      this.apiService.createCustomer(this.customerForm.value).subscribe(
        (res) => {
          console.log('Customer successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/customers-list'));
        }, (error) => {
          console.log(error);
        });
    }
  }

}
