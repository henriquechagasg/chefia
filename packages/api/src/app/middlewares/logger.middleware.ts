import { Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

const requestsLogger = new Logger('RequestLogger');

export function logger(req: Request, res: Response, next: NextFunction) {
  requestsLogger.log(`New ${req.method} request to ${req.url}`);
  next();
}
