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

   if (this.User.userName && this.User.password && this.User.email && this.User.gender) {
    
     this.id++;
     this.showUser.push({
       userName: this.User.userName,
       email: this.User.email,
       password: this.User.password,
       gender: this.User.gender,
       id: this.id,
      });

       localStorage.setItem("angular", JSON.stringify(this.showUser));
       
        alert("user creater successful ")
        this.router.navigate(["/login"])
      
      

      // this.User = {};
      
    }else{
      alert("Cant save your input")
    }
    
  }
  ngOnInit(){
    // console.log(this.showUser);
  //  this.showUser = JSON.parse(localStorage.getItem('angular')!) || [];
    
   }
}
