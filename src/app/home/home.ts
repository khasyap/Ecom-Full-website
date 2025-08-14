import { Component } from '@angular/core';
import { Data } from '../service/data';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private service:Data) {}
  products:any;
  ngOnInit(){
    this.service.getProducts().subscribe((data)=>{
      this.products=data
      console.log(this.products)
    })
  }
}
