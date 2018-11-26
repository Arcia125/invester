import { Injectable } from '@angular/core';

import { LogLevel } from './log-levels';

type LoggingFn = (currentLevel: LogLevel, level: LogLevel, format: (logLevel: LogLevel, ...args: any[]) => string, ...args: any[]) => string | void;

@Injectable({
  providedIn: 'root'
})
export class LogService {
  static log: LoggingFn = function log(currentLevel, level, format, ...args) {
    if (currentLevel >= level) {
      console.log(typeof format === 'function' ? format(level, ...args) : console.log);
    }
  };

  public logLevel = LogLevel.error;
  constructor() { }


  public defaultFormatter()
}
