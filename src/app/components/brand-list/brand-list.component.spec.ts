import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-Customer-list',
  templateUrl: './Customer-list.component.html',
  styleUrls: ['./Customer-list.component.css']
})

export class CustomerListComponent implements OnInit {

  Customer:any = [];

  constructor(private apiService: ApiService) {
    this.readCustomer();
  }

  ngOnInit() {}

  readCustomer(){
    this.apiService.getCustomers().subscribe((data) => {
     this.Customer = data;
    })
  }

  removeCustomer(Customer, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteCustomer(Customer._id).subscribe((data) => {
          this.Customer.splice(index, 1);
        }
      )
    }
  }

}
