import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  private name : string;
  constructor() { }

  ngOnInit() {
    this.name = "Kewali Multhonggad 57102011040"
  }

}
