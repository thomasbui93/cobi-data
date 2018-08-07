import { GenericList } from '../generic-list/GenericList'

export class Queue<T> extends GenericList<T> {
  /**
   * add element to the queue
   *
   * @param {T} item
   * @memberof Stack
   */
  queue(item: T): void {
    this.items.append(item)
  }

  /**
   * dequeue element from the queue
   *
   * @returns {(T | null)}
   * @memberof Queue
   * @return {T} return dequeued element, null if queque is empty
   */
  dequeue(): T | null {
    return this.items.removeAt(0)
  }
}
