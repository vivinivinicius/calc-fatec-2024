import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {

  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  num4: number = 0;
  sum: number = 0;

  calc(){
  this.sum = this.num1 + this.num2;
  }

  calc2(){
    this.sum = this.num3 / this.num4;
    }


}
