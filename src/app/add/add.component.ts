import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  empcode=""
  name=""
  designation=""
  salary=""
  company=""
  mobile=""
  username=""
  password=""

  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any={"empcode":this.empcode,"name":this.name,"designation":this.designation,"salary":this.salary,"company":this.company,"mobile":this.mobile,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>{
        console.log(response)

        if (response.status=="success") {
          alert("Employee Added")
          this.name=""
          this.designation=""

          
        } else {
          alert("Something Went Wrong")
        }
      }
    )
  }


}
