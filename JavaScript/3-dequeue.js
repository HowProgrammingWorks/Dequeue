'use strict';
const EventEmitter = require('events');

class Dequeue {
  constructor() {
    this.first = null;
    this.last = null;
    this._emitter = new EventEmitter();
  }
  push(item) {
    const last = this.last;
    const element = { prev: last, next: null, item };
    if (last) {
      last.next = element;
      this.last = element;
    } else {
      this.first = element;
      this.last = element;
    }
    this._emitter.emit('push', element.item, this);
  }
  pop() {
    const element = this.last;
    if (!element) return null;
    if (this.first === element) {
      this.first = null;
      this.last = null;
    } else {
      this.last = element.prev;
    }
    this._emitter.emit('pop', element.item, this);
    return element.item;
  }
  unshift(item) {
    const first = this.first;
    const element = { prev: null, next: first, item };
    if (first) {
      first.prev = element;
      this.first = element;
    } else {
      this.first = element;
      this.last = element;
    }
    this._emitter.emit('unshift', element.item, this);
  }
  shift() {
    const element = this.first;
    if (!element) return null;
    if (this.last === element) {
      this.first = null;
      this.last = null;
    } else {
      this.first = element.next;
    }
    this._emitter.emit('shift', element.item, this);
    return element.item;
  }
  on(...args) {
    return this._emitter.on(...args);
  }
  once(...args) {
    return this._emitter.once(...args);
  }
  remove(...args) {
    return this._emitter.removeListener(...args);
  }
  clear(...args) {
    return this._emitter.removeAllListeners(...args);
  }
  listeners(...args) {
    return this._emitter.listeners(...args);
  }
  count(...args) {
    return this._emitter.listenerCount(...args);
  }
  names() {
    return this._emitter.eventNames();
  }
}

// Usage

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };

const list = new Dequeue();
list.push(obj1);
list.push(obj2);
list.unshift(obj3);

console.dir(list.pop());
console.dir(list.shift());
console.dir(list.shift());
