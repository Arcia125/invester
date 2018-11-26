import { LoggingFnFormatter } from './logging-fn-formatter';
import { LogLevel } from './log-level.enum';

export type LoggingFn = (level: LogLevel, logFn: (...args: any[]) => void, format: LoggingFnFormatter, ...args: any[]) => void;
