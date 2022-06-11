import { Injectable } from '@angular/core';

export class Utilities {

  constructor() { }

  static currentId = 0;

  static getDeepCopy(item: Object) {
    return JSON.parse(JSON.stringify(item));
  }

  static getNextId() {
    this.currentId++;
    return this.currentId;
  }
}
