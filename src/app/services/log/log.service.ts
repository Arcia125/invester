import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import { LogLevel } from './log-level.enum';
import { log } from './log';
import { LoggingFnFormatter } from './logging-fn-formatter';
import { logLevelToString } from './log-level-to-string';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  public logLevel = environment.production ? LogLevel.error : LogLevel.silly;
  public formatter: LoggingFnFormatter;


  constructor() {
    // sets the default formatter
    this.formatter = this.defaultFormatter;
  }


  public defaultFormatter: LoggingFnFormatter = (level, ...args) => {
    return [`${logLevelToString(level).toUpperCase()}: `, ...args];
  }

  public log(level: LogLevel, logFn: (...args: any[]) => void = window.console.log.bind(window.console), ...args: any[]) {
    if (this.logLevel >= level) {
      log(level, logFn, this.formatter, ...args);
    }
  }

  public silly = (...args: any[]) => {
    this.log(LogLevel.silly, window.console.log.bind(window.console), ...args);
  }

  public info = (...args: any[]) => {
    this.log(LogLevel.info, window.console.log.bind(window.console), ...args);
  }

  public warning = (...args: any[]) => {
    this.log(LogLevel.warning, window.console.warn.bind(window.console), ...args);
  }

  public error = (...args: any[]) => {
    this.log(LogLevel.error, window.console.warn.bind(window.console), ...args);
  }
}
