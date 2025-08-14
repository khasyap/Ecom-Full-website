import { Component } from '@angular/core';
import { Data } from '../service/data';

@Component({
  selector: 'app-manageproducts',
  standalone: false,
  templateUrl: './manageproducts.html',
  styleUrl: './manageproducts.css'
})
export class Manageproducts {
  constructor(private service: Data) { }
  updateobj: any;
  products: any;
  ngOnInit() {
    this.service.getProducts().subscribe((data) => {
      this.products = data
      console.log(this.products)
    })
  }

  result: any;
  deleteNow(pid: any) {
    this.service.deleteProducts(pid).subscribe(
      (data) => {
        this.result = data;
        alert(this.result.status);
      
      })
      this.ngOnInit()
  }

  updatecontent(content: any) {
    this.updateobj = content;
    console.log(this.updateobj);

  }

  updatenow() {
    this.service.updateProducts(this.updateobj).subscribe(
      (data) => {
        this.result=data
        alert(this.result.status);
      })
  }

}
