import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runningman',
  templateUrl: './runningman.component.html',
  styleUrls: ['./runningman.component.css']
})
export class RunningmanComponent implements OnInit {
  private photoList: {
    title: string,
    url: string
  }[];
  constructor() { }

  ngOnInit() {
    this.photoList = [
      {
        title: "Running man",
        url: "../../assets/img/Running_Man1.jpg"
      }
    ]
  }

}
