import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  /*在ProductComponent中声明一个数组存储页面上展示的产品数据*/
  private products: Product[];
  private keyword: string;
  private titleFilter: FormControl = new FormControl();
  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges.pipe(debounceTime(500)).subscribe(
      value => this.keyword = value
    );
  }
  /*ngOnInit：组件中的一个钩子，在ProductComponent这个组件被实例化后调用一次， 用于初始化组件中的数据*/
  ngOnInit() {
    /*angular用后台页面控制前端，插入一个商品自动插入一个product介绍*/
    this.products = this.productService.getProducts();

  }

}

