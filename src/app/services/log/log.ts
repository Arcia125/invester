import { LoggingFn } from './logging-fn';
import { logLevelToString } from './log-level-to-string';

export const log: LoggingFn = function (logLevel, logFn = console.log.bind(window.console), formatFn, ...args) {
  const message: any | any[] = typeof formatFn === 'function' ? formatFn(logLevel, ...args) : [logLevelToString(logLevel).toUpperCase(), ...args];
  if (Array.isArray(message)) {
    logFn(...message);
  } else {
    logFn(message);
  }
};
