import { Injectable } from "@angular/core";

// @Injectable({ providedIn: 'root' })
export class LoggingService {
    lastLog: string;

    printLog(message: string) {
        console.log('new log: ', message);
        console.log('last log: ', this.lastLog);
        this.lastLog = message;
    }
}