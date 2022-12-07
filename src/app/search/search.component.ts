import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
   
  empcode=""

  search=()=>
  {
    let data:any=
    {
      "empcode":this.empcode
    }
    console.log(data)
  }

}
