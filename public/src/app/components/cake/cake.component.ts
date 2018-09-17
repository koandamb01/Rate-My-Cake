import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() cake: any
  constructor() { }

  ngOnInit() {
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }
}
