import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two-line-info',
  templateUrl: './two-line-info.component.html',
  styleUrls: ['./two-line-info.component.css']
})
export class TwoLineInfoComponent implements OnInit {
  @Input() label;
  constructor() { }

  ngOnInit() {
  }

}
