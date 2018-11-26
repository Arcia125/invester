import { LogLevel } from './log-level.enum';

export type LoggingFnFormatter = (logLevel: LogLevel, ...args: any[]) => any[];
