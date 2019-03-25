/**
 * class Stack
 *
 * @export
 * @class Stack
 * @template T
 */
export class Stack<T> {
  items: T[] = []
  /**
   * add element to the stack
   *
   * @param {T} item
   * @memberof Stack
   */
  push(item: T): void {
    this.items.push(item)
  }

  /**
   * remove element from the stack
   *
   * @returns {(T | null)}
   * @memberof Stack
   */
  pop(): T | undefined {
    return this.items.pop()
  }

  get length() {
    return this.items.length
  }

  public isEmpty() {
    return this.length === 0
  }
}
