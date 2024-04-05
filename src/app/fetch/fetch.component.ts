import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fetch',
  standalone: true,
  imports: [HttpClientModule,CommonModule, RouterModule],
  templateUrl: './fetch.component.html',
  styleUrl: './fetch.component.css'
})
export class FetchComponent {
  public newA : any = []
  constructor(public http: HttpClient){}
  ngOnInit(): void{
    
  //  this.http.get("https://dummyjson.com/todos").subscribe((data:<any>)=>{
    //OR
   this.http.get<any>("https://dummyjson.com/todos").subscribe((data)=>{
    console.log(data.todos);
    this.newA = data.todos
    console.log(this.newA);
    
    
   },(error)=>{
    console.log(error);
    
   })
  
  }
  
}

