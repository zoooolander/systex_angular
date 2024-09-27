import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SqrtPipe } from '../app.sqrt';
import { MyDateService } from '../my-date.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, SqrtPipe],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent implements OnInit{

  constructor(private myDateService: MyDateService){}

  ngOnInit(): void {
    this.todayDate = this.myDateService.showTodayDate();
    throw new Error('Method not implemented.');
  }
  title = 'News';
  months = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Augest',
    'September',
    'October',
    'November',
    'December',
  ];

  isAvaliable = false;
  monthSelected = '';
  todayDate = new Date();

  myClickFunction(event: any) {
    // alert("Button is clicked.");
    // console.log(event);
    if (this.isAvaliable) {
      this.isAvaliable = false;
    } else {
      this.isAvaliable = true;
    }
  }

  changeMonths(event: any) {
    //console.log(event.target.value);
    this.monthSelected = event.target.value;
  }
}
