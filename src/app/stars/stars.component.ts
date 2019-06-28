import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  /*装饰：StartsComponent这个组件的rating属性应该由父组件来传递*/
  @Input()
  /*输入属性，从而能够知道后台评价是什么,接收产品组件传给它的星级评价的数值*/
  private rating = 0;
  // rating来自products
  private stars: boolean[];
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
