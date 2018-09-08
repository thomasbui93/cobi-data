/**
 * Linked List SingleLinkedListNode class
 */
export class SingleLinkedListNode<T> {
  private value: T
  private next: null | SingleLinkedListNode<T> = null

  /**
   * SingleLinkedListNode constructor
   * @param value T
   */
  constructor(value: T) {
    this.value = value
  }

  /**
   * get value of current node
   *
   * @returns {T}
   * @memberof SingleLinkedListNode
   */
  getValue(): T {
    return this.value
  }

  /**
   * update value of current node
   *
   * @param {T} value
   * @memberof SingleLinkedListNode
   */
  setValue(value: T): void {
    this.value = value
  }

  /**
   * get next value for current node
   *
   * @returns {(null | SingleLinkedListNode<T>)}
   * @memberof SingleLinkedListNode
   */
  getNext(): null | SingleLinkedListNode<T> {
    return this.next
  }

  /**
   * set next value for linked list
   *
   * @param {(null | SingleLinkedListNode<T>)} node
   * @memberof SingleLinkedListNode
   */
  setNext(node: null | SingleLinkedListNode<T>): void {
    this.next = node
  }

  /**
   * check if two node is equal
   *
   * @param {T} value
   * @return {boolean} Returns true if node value is equal with external value, else false.
   */
  isEqual(value: T): boolean {
    return this.value === value
  }
}
