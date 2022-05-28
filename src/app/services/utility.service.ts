import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utilities {

  constructor() { }

  public static getDeepCopy(item: Object) {
    return JSON.parse(JSON.stringify(item));
  }

  public static getGUI() {
    return (([1e7] as unknown as number)+-1e3+-4e3+-8e3+-1e11).toString().replace(/[018]/g, (c: any) =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
}
