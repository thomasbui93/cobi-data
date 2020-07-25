import { DoublyLinkedList } from '../linked-list'
import { Nullable } from '../../type/nullable'

/**
 * class Stack
 *
 * @export
 * @class Stack
 * @template T
 */
export class Stack<T> {
  items: DoublyLinkedList<T> = new DoublyLinkedList<T>()

  /**
   * add element to the stack
   * Runtime: O(1)
   * @param {T} item
   * @memberof Stack
   */
  push(item: T): void {
    this.items.prepend(item)
  }

  /**
   * remove element from the stack
   * Runtime: O(1)
   * @returns {Nullable<T>}
   * @memberof Stack
   */
  pop(): Nullable<T> {
    const pop = this.items.unshift()
    return pop ? pop.value : null
  }

  /**
   * get queue length
   * Runtime: O(1)
   * @return {number} return number of element in the queue
   * @memberof Stack
   */
  get length() {
    return this.items.length
  }

  /**
   * check whether if queue length is empty
   * Runtime: O(1)
   * @return {boolean} return true if queue is empty, false otherwise
   * @memberof Stack
   */
  public isEmpty() {
    return this.length === 0
  }
}
