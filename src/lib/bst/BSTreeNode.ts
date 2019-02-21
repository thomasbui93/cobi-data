export class BSTreeNode<T> {
  public value: T
  public left: BSTreeNode<T> | null = null
  public right: BSTreeNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}
