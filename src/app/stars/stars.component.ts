import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  /*装饰：StartsComponent这个组件的rating属性应该由父组件来传递*/
  @Input()
  /*输入属性，从而能够知道后台评价是什么,接收产品组件传给它的星级评价的数值*/
  private rating = 0;

  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();

  // rating来自products
  private stars: boolean[];
  @Input()
  private readonly: boolean = true;
  constructor() { }

  ngOnInit() {

  }

  clickStar(index: number) {
    if(!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
