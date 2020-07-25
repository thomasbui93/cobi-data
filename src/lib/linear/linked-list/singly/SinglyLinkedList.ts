import { Nullable } from '../../../type/nullable'
import { SinglyNode } from './SinglyNode'

export class SinglyLinkedList<T> {
  head: Nullable<SinglyNode<T>> = null
  counter: number = 0

  /**
   * Construct linked list from an array
   * @param existingList T[]
   */
  constructor(existingList: T[] = []) {
    const self = this
    existingList.forEach((value: T) => self.append(value))
    this.counter = existingList.length
  }

  /**
   * Append the element to the end of the Linked List
   * @param value T
   */
  append(value: T) {
    const newNode = new SinglyNode(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let temp = this.head
      while (temp.next) {
        temp = temp.next
      }
      temp.next = newNode
    }
    this.counter++
  }

  /**
   * Prepend the element to the start of the Linked List
   * @param value T
   */
  prepend(value: T) {
    const newNode = new SinglyNode(value)
    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.counter++
  }

  /**
   * Add element after a given index
   * @param value T
   * @param index index
   *
   * @returns
   *  - true: correct insertion happens.
   *  - false: out of range insertion.
   */
  appendAfter(value: T, index: number): boolean {
    if (index <= 0 || !this.head) {
      this.prepend(value)
      this.counter++
      return true
    }

    if (this.counter <= index) {
      return false
    }

    const newNode = new SinglyNode(value)
    let cursor = 0
    let temp: Nullable<SinglyNode<T>> = this.head

    do {
      temp = temp!.next
      cursor++
    } while (cursor < index)

    this.counter++

    newNode.next = temp!.next
    temp!.next = newNode

    return true
  }

  /**
   * Remove element at given index
   * @param index index
   *
   * @returns {T} return removed element, null if it is invalid removal
   */
  removeAt(index: number): T | undefined {
    if (this.counter <= index || index < 0) {
      return
    }

    if (index === 0) {
      this.counter--
      if (this.head) {
        const removal = this.head
        this.head = this.head.next
        return removal.value
      } else {
        return
      }
    }

    let cursor = 0
    let temp: Nullable<SinglyNode<T>> = this.head

    while (cursor < index - 1) {
      temp = temp!.next
      cursor++
    }

    if (temp) {
      this.counter--
      const removal = temp.value
      temp.next = temp.next ? temp.next!.next : null
      return removal
    }
  }

  /**
   * Get element at given index
   * @param index index
   *
   */
  getAt(index: number) {
    if (this.counter <= index || index < 0) {
      throw new Error('Index is out of range')
    }

    let cursor = 0
    let temp = this.head
    while (cursor < index) {
      temp = temp!.next
      cursor++
    }
    return temp!.value
  }

  /**
   * Reverse the order of the linked list
   */
  reverse() {
    if (!this.head || !this.head.next) return
    let prev = this.head
    let current: Nullable<SinglyNode<T>> = this.head.next
    prev.next = null

    while (current) {
      let temp = current
      current = current.next

      temp.next = prev
      prev = temp
    }
    this.head = prev
  }

  /**
   * Reset the the Linked List to empty initial
   */
  get length(): number {
    return this.counter
  }

  /**
   * Reset the the Linked List to empty initial
   */
  clear() {
    this.head = null
    this.counter = 0
  }

  /**
   * Convert the Linked List to array
   */
  toArray(): T[] {
    let lastNode = this.head
    const list: T[] = []

    while (lastNode) {
      list.push(lastNode.value)
      lastNode = lastNode.next
    }

    return list
  }
}
