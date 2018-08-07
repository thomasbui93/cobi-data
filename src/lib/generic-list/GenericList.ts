import { SingleLinkedList } from '../linkedlist'

export class GenericList<T> {
  protected items: SingleLinkedList<T> = new SingleLinkedList()

  /**
   * get number of element in the list
   *
   * @returns {number}
   * @memberof Stack
   * @return {number}
   */
  getLength(): number {
    return this.items.getLength()
  }

  /**
   * check if list is empty
   *
   * @returns {boolean}
   * @memberof Stack
   * @return {boolean}
   */
  isEmpty(): boolean {
    return this.getLength() === 0
  }
}
