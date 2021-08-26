import { Component, EventEmitter, Input,OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    ngOnChanges(): void {
       this.cropWidth = this.rating * 75/5;
    }
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
   
    @Input() rating: number = 0;
    cropWidth: number = 0;
  
    onClick() : void{
       this.ratingClicked.emit(`The rating is ${this.rating}`);
    }
}