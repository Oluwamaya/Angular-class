import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public name = "Maya"
  private Country = "Nigeria"
  
  ngOnInit(){
    console.log(this.Country);
    console.log(this.name);
    
  }
public allUsers:Array<string> =[]
  public myText:string = ""
  doSomething(){
    alert("Hello world")
  }
 addUser(){
  this.allUsers.push(this.myText)
  console.log(this.allUsers);
  this.myText = ""
  
 }

 delItem(i:number){
   this.allUsers.splice(i,1);
  }
  editItem(i:number){
    let myValue:any = prompt("Enter your value");
    this.allUsers[i] = myValue
  }


  typeSomething(ev:any){
   this.myText = ev.target.value
  }
 

}
