import { isNull } from 'lodash'

/**
 * Linked List SingleLinkedListNode class
 */
export class SingleLinkedListNode<T> {
  private value: T
  private next: null | SingleLinkedListNode<T> = null

  /**
   * SingleLinkedListNode constructor
   * @param value T
   */
  constructor(value: T) {
    this.value = value
  }

  /**
   * get value of current node
   *
   * @returns {T}
   * @memberof SingleLinkedListNode
   */
  getValue(): T {
    return this.value
  }

  /**
   * get next value for current node
   *
   * @returns {(null | SingleLinkedListNode<T>)}
   * @memberof SingleLinkedListNode
   */
  getNext(): null | SingleLinkedListNode<T> {
    return this.next
  }

  /**
   * set next value for linked list
   *
   * @param {(null | SingleLinkedListNode<T>)} node
   * @memberof SingleLinkedListNode
   */
  setNext(node: null | SingleLinkedListNode<T>): void {
    this.next = node
  }

  /**
   * check if two node is equal
   *
   * @param {T} value
   * @return {boolean} Returns true if node value is equal with external value, else false.
   */
  isEqual(value: T): boolean {
    return this.value === value
  }
}

/**
 * Singly Linked List
 *
 * @export
 * @class SingleLinkedList
 */
export class SingleLinkedList<T> {
  private head: null | SingleLinkedListNode<T> = null
  private tail: null | SingleLinkedListNode<T> = null
  private length: number = 0 // Add counter to optimize getLength operation to O(1)

  /**
   * Add a value to the end of the linked list
   *
   * @param {T} value
   * @return {boolean} Returns true if operation is successfull, else false.
   */
  public append(value: T): boolean {
    try {
      const node = new SingleLinkedListNode(value)
      if (isNull(this.head) || isNull(this.tail)) {
        this.head = node
        this.tail = node
      } else {
        this.tail.setNext(node)
        this.tail = node
      }
      this.length++
      return true
    } catch (err) {
      return false
    }
  }

  /**
   * Add a value to the start of the linked list
   *
   * @param {T} value
   * @return {boolean} Returns true if operation is successfull, else false.
   */
  public prepend(value: T): boolean {
    try {
      const node = new SingleLinkedListNode(value)
      if (isNull(this.head) || isNull(this.tail)) {
        this.head = node
        this.tail = node
      } else {
        node.setNext(this.head)
        this.head = node
      }
      this.length++
      return true
    } catch (err) {
      return false
    }
  }

  /**
   * Remove all occurrance of a value from linked list
   * @param {T} value
   * @return {boolean} Returns true if value is found, else false.
   */
  public remove(value: T): boolean {
    if (isNull(this.head) || isNull(this.tail)) {
      return false
    } else {
      let isFound = false

      // Case when the value is located in start of the linked list
      while (!isNull(this.head) && this.head.isEqual(value)) {
        this.head = this.head.getNext()
        this.length--
        isFound = true
      }

      if (isFound) {
        return true
      }

      let currentNode: null | SingleLinkedListNode<T> = this.head

      if (!isNull(currentNode)) {
        while (currentNode) {
          const nextNode: null | SingleLinkedListNode<T> = currentNode.getNext()
          if (!isNull(nextNode) && nextNode.isEqual(value)) {
            currentNode = nextNode.getNext()
            this.length--
            isFound = true
          } else {
            currentNode = nextNode
          }
        }
      }

      if (this.tail.isEqual(value)) {
        this.tail = currentNode
        this.length--
        isFound = true
      }

      return isFound
    }
  }

  /**
   * Check if value is in the linked list
   *
   * @param {T} value
   * @return {boolean} Returns true if value is found, otherwise is false
   */
  find(value: T): boolean {
    let isFound: boolean = false
    let currentNode = this.head
    while (currentNode) {
      if (currentNode.isEqual(value)) {
        isFound = true
        break
      }
      currentNode = currentNode.getNext()
    }
    return isFound
  }

  /**
   * Convert the linkedlist to array
   *
   * @return {T[]} Returns array of linked list value in order from head to tail
   */
  toArray(): T[] {
    const returnedArray: T[] = []
    let currentNode = this.head
    while (currentNode) {
      returnedArray.push(currentNode.getValue())
      currentNode = currentNode.getNext()
    }
    return returnedArray
  }

  /**
   * get length of current list
   *
   * @return {number}
   */
  public getLength(): number {
    return this.length
  }
}
