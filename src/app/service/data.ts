import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data {

  constructor(private http:HttpClient){
  }
  getProducts(){
    return this.http.get('http://localhost:4300/products')
  }
  addProducts(proobj:any){
    return this.http.post('http://localhost:4300/addproducts',proobj)
  }
  deleteProducts(proobj:any){
    return this.http.delete('http://localhost:4300/products/:id',proobj)
  }
  updateProducts(proobj:any){
    return this.http.put(`http://localhost:4300/products/${proobj._id}`,proobj)
  }
}
