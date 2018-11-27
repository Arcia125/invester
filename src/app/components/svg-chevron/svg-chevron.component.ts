import { Component, Input, OnInit } from '@angular/core';


import { Direction } from '../../enums/direction.enum';
import { getSvgRotation } from '../../helpers/svg';

@Component({
  selector: '[app-svg-chevron], app-svg-chevron',
  templateUrl: './svg-chevron.component.html',
  styleUrls: ['./svg-chevron.component.css']
})
export class SvgChevronComponent implements OnInit {
  @Input()
  fill = '#262626';
  @Input()
  direction: Direction = Direction.down;
  private _directionAngles = {
    [Direction.up]: 180,
    [Direction.down]: 0,
    [Direction.right]: -90,
    [Direction.left]: 90
  };
  private _height = 100;
  private _width = 100;
  constructor() { }

  ngOnInit() { }

  getViewBox() {
    return `0 0 ${this._width} ${this._height}`;
  }

  getTransform() {
    const angle = this._directionAngles[this.direction];
    const x = this._width / 2;
    const y = this._height / 2;
    return getSvgRotation(angle, x, y);
  }
}
