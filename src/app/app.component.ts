import { Component, OnInit } from '@angular/core';
import { LeanorsityService } from './leanorsity.service';

declare let LearnosityItems: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private learnosityService: LeanorsityService) {}
  items: string[] = [];
  ngOnInit(){
    const assessmentId = '3bcd2221-9ab9-4906-9b4b-5e6f0852d32a';
    this.learnosityService
      .fetchAssessment(assessmentId)
      .subscribe((data:any)=>{
        this.items = data.request.items;
        const itemsApp = LearnosityItems.init(data, {
          readyListner(){
            console.log('ready');
          },
          errorListener(err: any){
            console.log('error',err);  
          },
        })
      })
  }
}
