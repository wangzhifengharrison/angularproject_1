import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, Comment, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  comments: Comment[];
  newRating:number =5;
  newComment: string = "";
  isCommentHidder = true;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService
              ) { }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params["productId"];
    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

  addComment(){
    let comment = new Comment(0, this.product.id, new Date().toString(), 'someonw', this.newRating, this.newComment);
    this.comments.unshift(comment);
    let sum = this.comments.reduce((sum, coment) => sum + coment.rating, 0);
    this.product.rating = sum/this.comments.length;
    this.newComment = null;
    this.newRating=5;
    this.isCommentHidder = true;
  }

}
