import { GenericList } from '../generic-list/GenericList'

/**
 * class Stack
 *
 * @export
 * @class Stack
 * @template T
 */
export class Stack<T> extends GenericList<T> {
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
}
