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

  disposed_of: string = "";
  disposed_other_note: string;

  _move: string = "";
  _move_note: string;

  _diagnose: string = "";
  _surgery: string = "";

  _fever: string = "";
  _pulse: string = "";
  _breathe: string = "";
  _blood_pressure_from: string = "";
  _blood_pressure_to: string = "";

  _food: string = "";
  _food_note: string = "";
  _practice: string = "";
  _practice_note: string = "";
  _exercise: string = "";
  _exercise_note: string = "";

  special_knowledge = {
    sp1: false,
    sp2: false,
    sp3: false,
    sp4: false,
    sp5: false,
    sp6: false,
    sp7: false,
    sp8: false,
    other: '',
  };

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
