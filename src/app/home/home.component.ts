import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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
}
