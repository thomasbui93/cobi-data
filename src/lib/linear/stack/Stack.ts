import { SinglyLinkedList } from '../linked-list'

/**
 * class Stack
 *
 * @export
 * @class Stack
 * @template T
 */
export class Stack<T> {
  items: SinglyLinkedList<T> = new SinglyLinkedList<T>([])
  /**
   * add element to the stack
   *
   * @param {T} item
   * @memberof Stack
   */
  push(item: T): void {
    this.items.prepend(item)
  }

  /**
   * remove element from the stack
   *
   * @returns {(T | null)}
   * @memberof Stack
   */
  pop(): T | undefined {
    return this.items.removeAt(0)
  }

  get length() {
    return this.items.length
  }

  public isEmpty() {
    return this.length === 0
  }
}
