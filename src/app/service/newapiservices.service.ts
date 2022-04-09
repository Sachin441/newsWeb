import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewapiservicesService {

  constructor(private http:HttpClient) { }
  // Teslanewsapiurl='https://newsapi.org/v2/everything?q=tesla&from=2022-03-09&sortBy=publishedAt&apiKey=43feb231c732491a9ef600ba93e586ea';
  techapiurl='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=43feb231c732491a9ef600ba93e586ea'
  // TeslatopHeading():Observable<any>{
  //   return this.http.get(this.Teslanewsapiurl)
  // }
  TeslatopHeading(topic:any):Observable<any>{
    return this.http.get('https://newsapi.org/v2/everything?q='+topic+'&from=2022-03-09&sortBy=publishedAt&apiKey=43feb231c732491a9ef600ba93e586ea')
  }

  techheading():Observable<any>{
    return this.http.get(this.techapiurl)
  }
}
