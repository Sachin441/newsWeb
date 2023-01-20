import { Component, OnInit } from '@angular/core';
import { NewapiservicesService } from '../service/newapiservices.service';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private service:NewapiservicesService) { }
  TeslatopheadingDisplay:any=[];
  public topic:any;
  ngOnInit(): void {
    this.search()
  }
  search(){
    this.service.TeslatopHeading().subscribe((response:any)=>{
      console.log(response)
      if(response.status=='ok')
      {
        this.TeslatopheadingDisplay=response.articles;
      }
      else{
        this.TeslatopheadingDisplay=[]
      }

    })
  }

}
