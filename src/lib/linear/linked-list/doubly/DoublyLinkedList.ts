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
   * Get first node.
   * <br/> Runtime: O(1).
   *
   * @returns Nullable<DLLNode<T>>
   */
  public getHead(): Nullable<DLLNode<T>> {
    return this.head
  }

  /**
   * Get last node.
   * <br/> Runtime: O(1).
   *
   * @returns Nullable<DLLNode<T>>
   */
  public getTail(): Nullable<DLLNode<T>> {
    return this.tail
  }

  /**
   * Append value to the end of list.
   * <br/> Runtime: O(1).
   *
   * @param value
   */
  public append(value: T) {
    const node = new DLLNode(value)
    if (!this.tail) {
      this.prepend(value)
    } else {
      this.insertAfter(this.tail, node)
      this.counter++
    }
  }

  /**
   * Remove the last node in list.
   * <br/> Runtime: O(1).
   *
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
   * Prepend value to the frontend of the list.
   * <br/> Runtime: O(1).
   *
   * @param value
   */
  public prepend(value: T) {
    const node = new DLLNode(value)
    if (!this.head) {
      this.head = this.tail = node
    } else {
      this.insertBefore(this.head, node)
    }
    this.counter++
  }

  private insertBefore(node: DLLNode<T>, newNode: DLLNode<T>) {
    newNode.next = node
    if (node.prev === null) {
      this.head = newNode
    } else {
      newNode.prev = node.prev
      node.prev.next = newNode
    }
    node.prev = newNode
  }

  private insertAfter(node: DLLNode<T>, newNode: DLLNode<T>) {
    newNode.prev = node
    if (node.next == null) {
      this.tail = newNode
    } else {
      newNode.next = node.next
      node.next.prev = newNode
    }
    node.next = newNode
  }

  /**
   * Remove the first node in list
   * <br/> Runtime: O(1).
   *
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
   * Return the number of nodes in the list
   * <br/> Runtime: O(1).
   *
   * @returns { number }
   */
  public get length(): number {
    return this.counter
  }

  /**
   * Traverse through the list
   * <br/> Runtime: O(n)
   *
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
