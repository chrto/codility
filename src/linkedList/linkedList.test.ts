import LinkedList, { TLinkedList, Node, TNode } from './linkedList';
import { expect as expectChai } from 'chai';

describe(`'Node' data structure implementation.`, () => {

  it('Should construct new Node', () => {
    let node: TNode<number> = new Node(5);

    expectChai(node)
      .to.be.instanceOf(Node);
    expectChai(node.value)
      .to.be.equal(5);
    expectChai(node.next)
      .to.be.equal(null);
  });
});

describe(`'Linked List' data structure implementation.`, () => {

  it('Should construct LinkedList', () => {
    let linkedList: TLinkedList<number> = new LinkedList();

    expectChai(linkedList)
      .to.be.instanceOf(LinkedList);
    expectChai(linkedList.size)
      .to.be.equal(0);
    expectChai(linkedList.head)
      .to.be.equal(null);
  });
});
