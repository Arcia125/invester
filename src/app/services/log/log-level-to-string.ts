import { LogLevel } from './log-level.enum';
import { logLevels } from './log-levels';


export function logLevelToString(logLevel: LogLevel): string {
  return logLevels[logLevel];
}
