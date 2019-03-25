export class Queue<T> {
  items: T[] = []
  /**
   * add element to the queue
   *
   * @param {T} item
   * @memberof Stack
   */
  queue(item: T): void {
    this.items.push(item)
  }

  /**
   * dequeue element from the queue
   *
   * @returns {(T | null)}
   * @memberof Queue
   * @return {T} return dequeued element, null if queque is empty
   */
  dequeue(): T | undefined {
    return this.items.shift()
  }

  get length() {
    return this.items.length
  }

  public isEmpty() {
    return this.length === 0
  }
}
