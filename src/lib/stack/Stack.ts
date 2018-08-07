import { SingleLinkedList } from '../linkedlist'

/**
 * class Stack
 *
 * @export
 * @class Stack
 * @template T
 */
export class Stack<T> {
  private items: SingleLinkedList<T> = new SingleLinkedList()

  /**
   * add element to the stack
   *
   * @param {T} item
   * @memberof Stack
   */
  push(item: T): void {
    this.items.append(item)
  }

  /**
   * remove element from the stack
   *
   * @returns {(T | null)}
   * @memberof Stack
   */
  pop(): T | null {
    return this.items.removeAt(this.items.getLength() - 1)
  }

  /**
   * get number of element in the stack
   *
   * @returns {number}
   * @memberof Stack
   */
  getLength(): number {
    return this.items.getLength()
  }
}
