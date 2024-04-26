import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DatePipe, PercentPipe ,CurrencyPipe, DecimalPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public userInfo : any = {}
  public date = new Date();
  constructor(private router : Router){
    const storeUser = localStorage.getItem("currentUser")
    this.userInfo = storeUser ? JSON.parse(storeUser) : []
  }

  ngOnInit(){
    console.log(this.userInfo);
    
  }

}
