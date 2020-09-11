import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  date = new FormControl(new Date());
  time: any;
  
  constructor() { }

  ngOnInit(): void {
    this.time = '05:11 pm';
  }

}
