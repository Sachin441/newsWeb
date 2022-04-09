import { Component, OnInit } from '@angular/core';
import { NewapiservicesService } from '../service/newapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private service:NewapiservicesService) { }
  techeadingDisplay:any=[];

  ngOnInit(): void {
    this.service.techheading().subscribe(response=>{
      console.log(response)
      if(response.status=='ok')
      {
        this.techeadingDisplay=response.articles;
      }
      else{
        this.techeadingDisplay=[]
      }

    })
  }

}
