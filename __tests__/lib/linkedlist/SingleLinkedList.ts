import { SingleLinkedListNode, SingleLinkedList } from './../../../src/lib/linkedlist/index'

describe('SingleLinkedListNode class', () => {
  it('SingleLinkedListNode getValue', () => {
    const node = new SingleLinkedListNode(3)
    expect(node.getValue()).toEqual(3)
  })

  it('SingleLinkedListNode setValue', () => {
    const node = new SingleLinkedListNode(3)
    node.setValue(9)
    expect(node.getValue()).toEqual(9)
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

describe('SingleLinkedList fromArray', () => {
  it('should create a list from array', () => {
    const linkedlist = new SingleLinkedList()
    linkedlist.fromArray([1,2,3,4,5])
    expect(linkedlist.toArray()).toEqual([1,2,3,4,5])
  })
})

describe('SingleLinkedList map', () => {
  it('should map list from array', () => {
    const linkedlist = new SingleLinkedList()
    const double = (value) => 2*value
    linkedlist.fromArray([1,2,3,4,5])
    linkedlist.map(double)
    expect(linkedlist.toArray()).toEqual([2,4,6,8,10])
  })
})

describe('SingleLinkedList forEach', () => {
  it('should map list from array', () => {
    const linkedlist = new SingleLinkedList()
    const double = (value) => 2*value
    linkedlist.fromArray([1,2,3,4,5])
    linkedlist.forEach(double)
    expect(linkedlist.toArray()).toEqual([1,2,3,4,5])
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

describe('SingleLinkedList reverse', () => {
  it('should reverse list', () => {
    const linkedlist = new SingleLinkedList()
    linkedlist.fromArray([1,2,3,4,5])
    linkedlist.reverse()
    expect(linkedlist.toArray()).toEqual([5,4,3,2,1])
  })
})

describe('SingleLinkedList removeAt', () => {
  it('should able to remove the normal index', () => {
    const linkedlist = new SingleLinkedList()
    linkedlist.fromArray([1,2,3,4,5])
    expect(linkedlist.removeAt(2)).toEqual(3)
    expect(linkedlist.toArray()).toEqual([1,2,4,5])
  })

  it('should able to remove the first index', () => {
    const linkedlist = new SingleLinkedList()
    linkedlist.fromArray([1,2,3,4,5])
    expect(linkedlist.removeAt(0)).toEqual(1)
    expect(linkedlist.toArray()).toEqual([2,3,4,5])
  })

  it('should able to remove the last index', () => {
    const linkedlist = new SingleLinkedList()
    linkedlist.fromArray([1,2,3,4,5])
    expect(linkedlist.removeAt(4)).toEqual(5)
    expect(linkedlist.toArray()).toEqual([1,2,3,4])
  })

  it('should not able to remove from an empty list', () => {
    const linkedlist = new SingleLinkedList()
    linkedlist.fromArray([])
    expect(linkedlist.removeAt(4)).toEqual(null)
    expect(linkedlist.toArray()).toEqual([])
  })

  it('should not able to remove from out of range index', () => {
    const linkedlist = new SingleLinkedList()
    linkedlist.fromArray([1,2,3,4,5])
    expect(linkedlist.removeAt(6)).toEqual(null)
    expect(linkedlist.toArray()).toEqual([1,2,3,4,5])
  })

  it('should not able to from single element list', () => {
    const linkedlist = new SingleLinkedList()
    linkedlist.fromArray([1])
    expect(linkedlist.removeAt(0)).toEqual(1)
    expect(linkedlist.toArray()).toEqual([])
  })
})

describe('SingleLinkedList combine tests', () => {
  it('should be able to withstand combination of add and remove', () => {
    const linkedlist = new SingleLinkedList()
    linkedlist.append(1)
    linkedlist.append(2)
    linkedlist.append(3)
    linkedlist.remove(2)
    linkedlist.append(5)
    expect(linkedlist.toArray()).toEqual([1,3,5])
  })
})