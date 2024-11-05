import insertFirst from './insertFirst/insertFirst';
import printListValues from './printListValues/printListValues';

export type TNode<T> = {
  value: T;
  next: TNode<T>;
};

export const Node: <T>(val: T, nextNode?: TNode<T>) => void = function (val, nextNode = null) {
  this.value = val;
  this.next = nextNode;
};

export type TLinkedList<T> = {
  head: TNode<T>;
  size: number;

  insertFirst: <T>(data: T) => void;
  printListValues: () => void;
};

const LinkedList: () => void = function () {
  this.head = null;
  this.size = 0;
};

LinkedList.prototype.insertFirst = insertFirst;
LinkedList.prototype.printListValues = printListValues
};

export default LinkedList;
