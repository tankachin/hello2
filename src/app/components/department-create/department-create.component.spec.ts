import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-Product-create',
  templateUrl: './Product-create.component.html',
  styleUrls: ['./Product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  submitted = false;
  ProductForm: FormGroup;
  ProductProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

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
    this.ProductForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.ProductForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.ProductForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.ProductForm.valid) {
      return false;
    } else {
      this.apiService.createProduct(this.ProductForm.value).subscribe(
        (res) => {
          console.log('Product successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/Products-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
