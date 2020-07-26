import { DoublyLinkedList } from '../linked-list'
import { Nullable } from '../../type/nullable'

export class Deque<T> {
  private deque: DoublyLinkedList<T> = new DoublyLinkedList<T>()

  /**
   * Insert item to the front of the deque
   * <br/> Runtime: O(1).
   *
   * @memberof Deque
   * @param { T } value
   */
  public insertFront(value: T) {
    this.deque.prepend(value)
  }

  /**
   * Insert item to the rear of the deque.
   * <br/> Runtime: O(1).
   *
   * @memberof Deque
   * @param { T } value
   */
  public insertRear(value: T) {
    this.deque.append(value)
  }

  /**
   * Remove item from the front of the deque.
   * <br/> Runtime: O(1).
   *
   * @memberof Deque
   * @return { Nullable<T> }
   */
  public removeFront(): Nullable<T> {
    const front = this.deque.shift()
    return front ? front.value : null
  }

  /**
   * Remove item from the rear of the deque.
   * <br/> Runtime: O(1).
   *
   * @memberof Deque
   * @return { Nullable<T> }
   */
  public removeRear(): Nullable<T> {
    const rear = this.deque.pop()
    return rear ? rear.value : null
  }

  /**
   * Get item from the front of the deque.
   * <br/> Runtime: O(1).
   *
   * @memberof Deque
   * @return { Nullable<T> }
   */
  public getFront(): Nullable<T> {
    const head = this.deque.getHead()
    return head ? head.value : null
  }

  /**
   * Get item from the rear of the deque.
   * <br/> Runtime: O(1).
   *
   * @memberof Deque
   * @return { Nullable<T> }
   */
  public getRear(): Nullable<T> {
    const rear = this.deque.getTail()
    return rear ? rear.value : null
  }

  /**
   * Get length of the deque
   * <br/> Runtime: O(1).
   *
   * @memberof Deque
   * @return { number }
   */
  public get size(): number {
    return this.deque.length
  }
}
