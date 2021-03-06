// single linked lists in javascript
class LinkedList {
    constructor(value) {
      this.head = new ListNode(value)
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      const node = new ListNode(value);
      this.tail.next = node;
      this.tail = node;
      this.length++;
      return this.print();
    }
  
    prepend(value) {
      const node = new ListNode(value);
      node.next = this.head;
      this.head = node;
      this.length++;
      return this.print();
    }
  
    insert(index, value) {
      if (index >= this.length) {
        return this.append(value);
      }
  
      if (index <= 0) {
        return this.prepend(value);
      }
  
      const node = new ListNode(value);
  
      let leader = this.traverseTo(index -1);
  
      node.next = leader.next;
      leader.next = node;
  
      return this.print();
    }
  
    remove(index) {
      if (index > this.length) {
        index = this.length;
      }
      const leader = this.traverseTo(index - 1);
      const node = leader.next;
      leader.next = node.next;
      this.length--;
      return this.print();
    }
  
    traverseTo(index) {
      if (index <= 0) {
        return this.head;
      }
  
      if (index >= this.length) {
        return this.tail;
      }
  
      let i = 0;
      let node = this.head;
      while(node !== null && i < index) {
        node = node.next;
        i++;
      }
      return node;
    }
  
    print() {
      const values = [];
      let currentNode = this.head;
      while(currentNode !== null) {
        values.push(currentNode.value);
        currentNode = currentNode.next;
      }
  
      console.log(values.join('-->'));
    }
  }
  
  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  // functionality testing
  const aLinkedList = new LinkedList('alpha');
  aLinkedList.append(2);
  aLinkedList.prepend('john');
  aLinkedList.insert(6, 'bob');
  aLinkedList.insert(1, 'eric');
  aLinkedList.insert(4, 'jane');
  aLinkedList.remove(4);
  aLinkedList.remove(500);
  aLinkedList.remove(0);
  