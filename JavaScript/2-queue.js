'use strict';

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  put(item) {
    const last = this.last;
    const element = { next: null, item };
    if (last) {
      last.next = element;
      this.last = element;
    } else {
      this.first = element;
      this.last = element;
    }
  }
  pick() {
    const element = this.first;
    if (!element) return null;
    if (this.last === element) {
      this.first = null;
      this.last = null;
    } else {
      this.first = element.next;
    }
    return element.item;
  }
}

// Usage

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };

const list = new Queue();
list.put(obj1);
list.put(obj2);
list.put(obj3);

console.dir(list.pick());
console.dir(list.pick());
console.dir(list.pick());
console.dir(list.pick());
