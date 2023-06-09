import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('myInput', { static: true })
  myInput!: ElementRef;

  inputText: string = 'Message from component';

  ngOnInit(): void {
  }

  onClick() {
    console.log("Befor:",this.myInput.nativeElement.value);
    this.myInput.nativeElement.value = '';
    console.log("After:",this.myInput.nativeElement.value);
  }
}
