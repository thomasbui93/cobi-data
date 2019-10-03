import { Nullable } from '../../../type/nullable'

export class SinglyNode<T> {
  value: T
  next: Nullable<SinglyNode<T>>

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}
