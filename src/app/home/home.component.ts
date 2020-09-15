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

  special_knowledge: any = [];
  special_care: any = [];
  is_ER: any = [];

  _history_summary: string = "";
  _medical_certificate: string = "";

  _patient_signature: string;
  _nurse_signature: string;




  constructor() { }

  ngOnInit(): void {
    this.time = '05:11 pm';
  }

  onchange(event) {
    console.log(event)
    console.log(this.release_date.value)
  }

}
