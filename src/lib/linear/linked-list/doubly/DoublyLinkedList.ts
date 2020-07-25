import { Nullable } from '../../../type/nullable'

/**
 * Circular Linked List Node
 */
class DLLNode<T> {
  value: T
  next: Nullable<DLLNode<T>>
  prev: Nullable<DLLNode<T>>

  constructor(value: T) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

export class DoublyLinkedList<T> {
  private head: Nullable<DLLNode<T>> = null
  private tail: Nullable<DLLNode<T>> = null
  private counter: number = 0

  /**
   * Append value to the end of list
   * Runtime: O(1)
   * @param value
   */
  public append(value: T) {
    const node = new DLLNode(value)
    if (!this.tail) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.counter++
  }

  /**
   * Remove the last node in list
   * Runtime: O(1)
   * @returns Nullable<DLLNode<T>>
   */
  public pop(): Nullable<DLLNode<T>> {
    if (this.tail) {
      const oldTail = this.tail
      const prev = this.tail.prev
      if (prev) {
        prev.next = null
        this.tail = prev
      } else {
        this.head = this.tail = null
      }
      this.counter--
      return oldTail
    } else {
      return null
    }
  }

  /**
   * Prepend value to the frontend of the list
   * Runtime: O(1)
   * @param value
   */
  public prepend(value: T) {
    const node = new DLLNode(value)
    if (!this.head) {
      this.head = this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.counter++
  }

  /**
   * Remove the first node in list
   * Runtime: O(1)
   * @returns Nullable<DLLNode<T>>
   */
  public shift(): Nullable<DLLNode<T>> {
    if (this.head) {
      let oldHead = this.head
      const next = oldHead.next
      if (next) {
        next.prev = null
        this.head = next
      } else {
        this.head = this.tail = null
      }
      this.counter--
      return oldHead
    } else {
      return null
    }
  }

  /**
   * @returns Return the number of nodes in the list
   */
  public get length(): number {
    return this.counter
  }

  /**
   * Traverse through the list
   * Runtime: O(n)
   * @param callback Function
   */
  public traverse(callback: Function) {
    let temp = this.head
    while (temp) {
      callback(temp.value)
      if (temp === this.tail) break
      temp = temp.next
    }
  }
}
