import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.css']
})
export class ButtonLoginComponent implements OnInit{

  @Input()
  buttonName: string = ''


  constructor() {}

  ngOnInit(): void {
  }
}
