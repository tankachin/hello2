import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css']
})
export class BrandCreateComponent implements OnInit {
  submitted = false;
  brandForm: FormGroup;
  branddepartment: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  brandcategory: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() {
  }

  mainForm() {
    this.brandForm = this.fb.group({

      sku: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      descripton: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      model: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      brand: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      height: ['', [Validators.required]],
      depth: ['', [Validators.required]],
      barcode: ['', [Validators.required]],
      material: ['', [Validators.required]],
      colour: ['', [Validators.required]],
      category: ['', [Validators.required]],
      department: ['', [Validators.required]],


    });
  }

  // Choose designation with select dropdown
  updateProfile(e) {
    this.brandForm.get('designation').setValue(e, {
      onlySelf: true
    });
  }

  // Getter to access form control
  get myForm() {
    return this.brandForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.brandForm.valid) {
      return false;
    } else {
      this.apiService.createBrand(this.brandForm.value).subscribe(
        (res) => {
          console.log('Brand successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/brands-list'));


        }, (error) => {
          console.log(error);
        });
    }
  }


}
