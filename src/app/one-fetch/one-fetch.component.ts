import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-fetch',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './one-fetch.component.html',
  styleUrl: './one-fetch.component.css'
})
export class OneFetchComponent {
constructor(public routerParameter: ActivatedRoute, public http: HttpClient){};
 public showInfo : any = {} 
  ngOnInit(): void {
    // Retrieve route parameter 'id'

    const id = this.routerParameter.snapshot.params['id'];
    console.log(id);

    
    this.http.get<any>(`https://dummyjson.com/todos/` + id).subscribe(
      (data) => {
        console.log(data);
        this.showInfo = data
      },
      (error) => {
        console.error('Error fetching todos:', error);
      }
    );
  }  
}

