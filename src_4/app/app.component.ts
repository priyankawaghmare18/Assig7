import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  str= "Marellous Infosystems";
  public strUp:any;
  public strLow:any;
  
  public  funUp() :any{
    this.strUp=this.str.toUpperCase();
   // this.strLow=this.str.toLowerCase();
   return this.strUp;
  } 
  public  funLow() :any{
    //this.strUp=this.str.toUpperCase();
    this.strLow=this.str.toLowerCase();
    return this.strLow;
  } 

  
//
}
