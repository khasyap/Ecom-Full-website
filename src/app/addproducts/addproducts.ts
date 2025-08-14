import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../service/data';

@Component({
  selector: 'app-addproducts',
  standalone: false,
  templateUrl: './addproducts.html',
  styleUrl: './addproducts.css'
})

export class Addproducts {
  productForm:FormGroup=new FormGroup({})
  constructor(private fb:FormBuilder,private service:Data){
    this.productForm=this.fb.group({
      productName:['',Validators.required],
    productDescription:['',Validators.required],
    productPrice:['',Validators.required],
    productCategory:['',Validators.required],
    productImage:['',Validators.required]
    })
  }
  result:any;
  addProducts(){
    console.log(this.productForm.value)
    this.service.addProducts(this.productForm.value).subscribe((data)=>{
      this.result=data;
      alert(this.result.status)
    })
  }
}
