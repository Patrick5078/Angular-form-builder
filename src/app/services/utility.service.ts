import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  currentId = 0;

  public getDeepCopy(item: Object) {
    return JSON.parse(JSON.stringify(item));
  }

  public getNextId() {
    this.currentId++;
    return this.currentId;
  }
}
