import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  release_date = new FormControl(new Date());
  date1 = new FormControl(new Date());
  date2 = new FormControl(new Date());
  time: any;

  disposed_of



  test: boolean;
  test1: boolean;
  
  constructor() { }

  ngOnInit(): void {
    this.time = '05:11 pm';
  }

  onchange(event) {
    console.log(event)
    console.log(this.test)
  }

}
