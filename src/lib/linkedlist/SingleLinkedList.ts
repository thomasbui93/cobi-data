import { isNull } from 'lodash'
import { SingleLinkedListNode } from './SingleLinkedListNode'

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
            currentNode.setNext(nextNode.getNext())
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
   * remove element at index of the list
   *
   * @param {number} index
   * @returns {(T | null)}
   * @memberof SingleLinkedList
   */
  removeAt(index: number): T | null {
    if (index > this.getLength() - 1 || isNull(this.head)) {
      return null
    }

    let counter = 0
    let currentNode: null | SingleLinkedListNode<T> = this.head
    let foundNode = null

    if (index === 0) {
      this.head = this.head.getNext()
      this.length--
      return currentNode.getValue()
    }

    while (currentNode) {
      if (counter === index - 1) {
        const nextNode: null | SingleLinkedListNode<T> = currentNode.getNext()
        if (!isNull(nextNode)) {
          currentNode.setNext(nextNode.getNext())
          foundNode = nextNode.getValue()
        }
        this.length--
        break
      }
      currentNode = currentNode.getNext()
      counter++
    }

    return foundNode
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
   * Traverse through linkedlist with callback
   *
   * @param {(value: T) => void} callbackFunction
   * @returns {SingleLinkedList<T>}
   * @memberof SingleLinkedList
   */
  forEach(callbackFunction: (value: T) => void): SingleLinkedList<T> {
    let currentNode = this.head
    while (!isNull(currentNode)) {
      callbackFunction(currentNode.getValue())
      currentNode = currentNode.getNext()
    }
    return this
  }

  /**
   * map linkedlist with callback
   *
   * @param {(value: T) => T} callbackFunction
   * @returns {SingleLinkedList<T>}
   * @memberof SingleLinkedList
   */
  map(callbackFunction: (value: T) => T): SingleLinkedList<T> {
    let currentNode = this.head
    while (!isNull(currentNode)) {
      currentNode.setValue(callbackFunction(currentNode.getValue()))
      currentNode = currentNode.getNext()
    }
    return this
  }

  reverse(): void {
    let prev = null
    let current = this.head
    while (!isNull(current)) {
      let next = current.getNext()
      current.setNext(prev)
      prev = current
      current = next
    }
    this.head = prev
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
   * convert array to linked list
   *
   * @param {T[]} inputArray
   * @returns {void}
   * @memberof SingleLinkedList
   */
  fromArray(inputArray: T[]): void {
    return inputArray.forEach(this.append.bind(this))
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
