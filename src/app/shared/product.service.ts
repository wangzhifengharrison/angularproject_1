import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /*初始化数组*/
  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品，是我在学习慕课网Angular入门实战时创建的', ['图书']),
    new Product(3, '第三个商品', 3.99, 4.5, '这是第三个商品，是我在学习慕课网Angular入门实战时创建的', ['硬件设备']),
    new Product(4, '第四个商品', 4.99, 1.5, '这是第四个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 5.99, 3.5, '这是第五个商品，是我在学习慕课网Angular入门实战时创建的', ['电子产品']),
    new Product(6, '第六个商品', 6.99, 2.5, '这是第六个商品，是我在学习慕课网Angular入门实战时创建的', ['图书'])
  ];

  private comments: Comment[] = [
    new Comment(1,1, '2017-02-02', 'zhangsan', 3, 'good'),
    new Comment(2,1, '2017-02-02', 'zhangsan', 3, 'good'),
    new Comment(3,1, '2017-02-02', 'zhangsan', 3, 'good'),
    new Comment(4,1, '2017-04-02', 'zhangsan', 3, 'good'),
    new Comment(5,2, '2017-05-02', 'zhangsanyy', 4, 'good'),
    new Comment(6,2, '2017-06-02', 'zhangsanyy', 5, 'good'),
  ]

  constructor() { }
  getAllCategories(): string[]{
    return ['电子产品', '硬件设备', '图书'];
  }
  // get the whole products
  getProducts(): Product[] {
    return this.products;
  }
  // get product by id
  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }
  // @ts-ignore
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);

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
// create a comment calss
export class Comment{
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
