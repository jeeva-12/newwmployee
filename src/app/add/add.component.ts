import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private api:ApiService,private route:Router){}

  readValue=()=>
  {
    let data:any={"empcode":this.empcode,"name":this.name,"designation":this.designation,"salary":this.salary,"company":this.company,"mobile":this.mobile,"username":this.username,"password":this.password}
    console.log(data)
    this.api.addCourse(data).subscribe(
      (response:any)=>{
      
        }
      
    )

    this.empcode=""
    this.name=""
    this.designation=""
    this.salary=""
    this.company=""
    this.mobile=""
    this.username=""
    this.password=""
    console.log("Success")
    this.route.navigate(["/"])
    console.log(data)
  }


}
