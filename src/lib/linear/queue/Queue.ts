import { DoublyLinkedList } from '../linked-list'
import { Nullable } from '../../type/nullable'

/**
 * class Queue
 *
 * @export
 * @class Queue
 * @template T
 */
export class Queue<T> {
  items: DoublyLinkedList<T> = new DoublyLinkedList<T>()

  /**
   * add element to the queue
   * Runtime: O(1)
   * @param {T} item
   * @memberof Queue
   */
  enqueue(item: T): void {
    this.items.append(item)
  }

  /**
   * dequeue element from the queue
   * Runtime: O(1)
   * @returns { Nullable<T>}
   * @memberof Queue
   * @return {T} return dequeued element, null if queue is empty
   */
  dequeue(): Nullable<T> {
    const node = this.items.shift()
    return node ? node.value : null
  }

  /**
   * get queue length
   * Runtime: O(1)
   * @return {number} return number of element in the queue
   * @memberof Queue
   */
  get length(): number {
    return this.items.length
  }

  /**
   * check whether if queue length is empty
   * Runtime: O(1)
   * @return {boolean} return true if queue is empty, false otherwise
   * @memberof Queue
   */
  public isEmpty() {
    return this.length === 0
  }
}
