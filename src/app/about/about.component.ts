import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { routes } from '../app.routes';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public router:  Router){};
 public displa:string = "";
 public User:any = {};
 public showUser:any[] =[];
public id: number = 0;
// public arrayUser:any = [];
 
 myName(ev:any){
  this.displa = ev.target.value;
 }
 myEmail(ev:any){
  this.displa = ev.target.value;
 }
 onSubmit(){

   if (this.User.firstName && this.User.lastName && this.User.email && this.User.gender) {
    
     this.id++;
     this.showUser.push({
       firstName: this.User.firstName,
       lastName: this.User.lastName,
       email: this.User.email,
       gender: this.User.gender,
       id: this.id,
      });

      localStorage.setItem("angular", JSON.stringify(this.showUser));

      this.router.navigate(["/show_todo"])
      
      
      // this.User = {};
    }else{
      alert("Cant save your input")
    }
    
  }
  ngOnInit(){
    console.log(this.showUser);
   this.showUser = JSON.parse(localStorage.getItem('angular')!) || [];
    
   }
}
