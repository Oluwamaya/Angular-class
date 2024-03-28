import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public User:any = {};
  public allUsers:any[] = []
  
  constructor(private router :Router){
     const storeData = localStorage.getItem("angular")
    this.allUsers =  storeData ? JSON.parse(storeData) : [];
  }
  
  submited(){
    if (this.User.email == "" || this.User.password === "") {
      alert("Email or password cannot be empty")
    }else{
     const foundUser = this.allUsers.find( u => u.email === this.User.email && u.password === this.User.password)
     
     if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      alert("user logged in successful ")
      this.router.navigate(["/dashboard"])
     }else{
      alert("incorrect credentials")
     }
    }
  }

}
