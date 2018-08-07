import { SingleLinkedListNode, SingleLinkedList } from './../../../src/lib/linkedlist/index'

describe('SingleLinkedListNode class', () => {
  it('SingleLinkedListNode constructor', () => {
    const node = new SingleLinkedListNode(3)
    expect(node.getValue()).toEqual(3)
  })

  it('SingleLinkedListNode isEqual', () => {
    const node = new SingleLinkedListNode(3)
    expect(node.isEqual(3)).toBeTruthy()
  })

  it('SingleLinkedListNode setNext ', () => {
    const node = new SingleLinkedListNode(3)
    const nextNode = new SingleLinkedListNode(9)
    node.setNext(nextNode)
    expect(node.getNext().isEqual(9)).toBeTruthy()
  })

  it('SingleLinkedListNode getNext ', () => {
    const node = new SingleLinkedListNode(3)
    const nextNode = new SingleLinkedListNode(9)
    node.setNext(nextNode)
    expect(node.getNext().isEqual(9)).toBeTruthy()
  })
})

describe('SingleLinkedList append', () => {
  it('should be able to add element to an empty list', () => {
    const linkedlist = new SingleLinkedList()
    expect(linkedlist.append(3)).toBeTruthy()
    expect(linkedlist.getLength()).toBe(1)
    expect(linkedlist.toArray()).toEqual([3])
  })

  it('should be able to add element to an existing list', () => {
    const linkedlist = new SingleLinkedList()
    linkedlist.append(3)
    expect(linkedlist.append(9)).toBeTruthy()
    expect(linkedlist.getLength()).toBe(2)
    expect(linkedlist.toArray()).toEqual([3, 9])
  })
})

describe('SingleLinkedList prepend', () => {
  it('should be able to add element to an empty list', () => {
    const linkedlist = new SingleLinkedList()
    expect(linkedlist.prepend(3)).toBeTruthy()
    expect(linkedlist.getLength()).toBe(1)
    expect(linkedlist.toArray()).toEqual([3])
  })

  it('should be able to add element to an existing list', () => {
    const linkedlist = new SingleLinkedList()
    linkedlist.prepend(3)
    expect(linkedlist.prepend(9)).toBeTruthy()
    expect(linkedlist.getLength()).toBe(2)
    expect(linkedlist.toArray()).toEqual([9, 3])
  })
})

describe('SingleLinkedList find', () => {
  it('should return true if element is in the list', () => {
    const linkedlist = new SingleLinkedList();
    [1,2,3,4,5].forEach(element => linkedlist.append(element))
    expect(linkedlist.find(5)).toBeTruthy()
  })

  it('should return false if element is not in the list', () => {
    const linkedlist = new SingleLinkedList();
    [1,2,3,4,5].forEach(element => linkedlist.append(element))
    expect(linkedlist.find(7)).toBeFalsy()
  })
})

describe('SingleLinkedList find', () => {
  it('should return true if element is in the list', () => {
    const linkedlist = new SingleLinkedList();
    [1,2,3,4,5].forEach(element => linkedlist.append(element))
    expect(linkedlist.find(5)).toBeTruthy()
  })

  it('should return false if element is not in the list', () => {
    const linkedlist = new SingleLinkedList();
    [1,2,3,4,5].forEach(element => linkedlist.append(element))
    expect(linkedlist.find(7)).toBeFalsy()
  })
})

describe('SingleLinkedList remove', () => {
  it('should return false if it is an empty list', () => {
    const linkedlist = new SingleLinkedList();
    expect(linkedlist.remove(5)).toBeFalsy()
  })

  it('should return false if element is not in the list', () => {
    const linkedlist = new SingleLinkedList();
    [1,2,3,4,5].forEach(element => linkedlist.append(element))
    expect(linkedlist.remove(9)).toBeFalsy()
  })

  it('should return true if the first element is the value', () => {
    const linkedlist = new SingleLinkedList();
    [1,2,3,4,5].forEach(element => linkedlist.append(element))
    expect(linkedlist.remove(1)).toBeTruthy()
  })

  it('should return true if the last element is the value', () => {
    const linkedlist = new SingleLinkedList();
    [1,2,3,4,5].forEach(element => linkedlist.append(element))
    expect(linkedlist.remove(5)).toBeTruthy()
  })

  it('should return true if the middle element is the value', () => {
    const linkedlist = new SingleLinkedList();
    [1,2,3,4,5].forEach(element => linkedlist.append(element))
    expect(linkedlist.remove(2)).toBeTruthy()
  })
})