import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  submitted = false;
  categoryForm: FormGroup;
  categorydepartment: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
  categorycategory: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

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
    this.categoryForm = this.fb.group({

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
    this.categoryForm.get('designation').setValue(e, {
      onlySelf: true
    });
  }

  // Getter to access form control
  get myForm() {
    return this.categoryForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.categoryForm.valid) {
      return false;
    } else {
      this.apiService.createCategory(this.categoryForm.value).subscribe(
        (res) => {
          console.log('Category successfully created!');
          this.ngZone.run(() => this.router.navigateByUrl('/categorys-list'));


        }, (error) => {
          console.log(error);
        });
    }
  }


}
