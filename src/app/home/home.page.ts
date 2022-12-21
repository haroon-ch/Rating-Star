import { Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  stars: number[] = [1, 2, 3, 4, 5];

  selectedValue: number = 0;
  isMouseover = true;

  public data :any;
  
  constructor() {}



  ngOnInit(star:number){
    console.log(this.stars);
    console.log(this.selectedValue);
  }

  countStar(star: number) {
    this.isMouseover = false;
    this.selectedValue = star;
    this.data = this.selectedValue;
    console.log(this.data);
  }
  
   addClass(star: number) {
    if (this.isMouseover) {
      this.selectedValue = star;
      console.log(this.selectedValue);
      
    }
   }
  
   removeClass() {
     if (this.isMouseover) {
        this.selectedValue = 0;
        console.log(this.selectedValue);
     }
   }


}
