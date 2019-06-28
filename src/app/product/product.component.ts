import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  /*在ProductComponent中声明一个数组存储页面上展示的产品数据*/
  private products: Array<Product>;
  constructor() { }
  /*ngOnInit：组件中的一个钩子，在ProductComponent这个组件被实例化后调用一次， 用于初始化组件中的数据*/
  ngOnInit() {
    /*初始化数组*/
    this.products = [
      new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品，是我在学习慕课网Angular入门实战时创建的', ['图书']),
      new Product(3, '第三个商品', 3.99, 4.5, '这是第三个商品，是我在学习慕课网Angular入门实战时创建的', ['硬件设备']),
      new Product(4, '第四个商品', 4.99, 1.5, '这是第四个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备']),
      new Product(5, '第五个商品', 5.99, 3.5, '这是第五个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品']),
      new Product(6, '第六个商品', 6.99, 2.5, '这是第六个商品，是我在学习慕课网Angular入门实战时创建的', ['图书'])
    ];
    /*angular用后台页面控制前端，插入一个商品自动插入一个product介绍*/
    this.products.push(new Product(7, '第七个商品', 6.99, 2.5, '这是第六个商品，是我在学习慕课网Angular入门实战时创建的', ['图书']) );
  }

}

/*
需要一个对象，封装产品信息*/
/*定义一个对象*/
export class Product {
  /*构造函数声明产品需要的属性*/
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
