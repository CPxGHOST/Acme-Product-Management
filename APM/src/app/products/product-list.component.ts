import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { DataService } from "../data/data-service.component";
import { IProduct } from "./product";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
      
   constructor(private dataService : DataService){
   }

    pageTitle: string = 'Products List!';
    imgWidth: number = 50;
    imgMargin: number = 2;
    isImageVisible: boolean = false;
   
    private _filterString: string = '';
    get filterString() : string{
      return this._filterString;
    }
    set filterString(value: string){
      this._filterString = value;

    let lowerCaseFilter: string = this.filterString.toLowerCase();
    this.filteredProducts =  this.products.filter((product : IProduct) => product.productName.toLowerCase().includes(lowerCaseFilter));
    }

    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];
  
    ngOnInit(): void {
      this.dataService.GetProducts().subscribe({
          next: products => {
          this.products = products;
          this.filteredProducts = products;
          },
          error: err => console.log(err)
      });
    }

    toggleImage() : void{
      this.isImageVisible = !this.isImageVisible;
    }
  
    onRatingClicked(message : string) : void{
      this.pageTitle += ' ' + message;
    }
  }