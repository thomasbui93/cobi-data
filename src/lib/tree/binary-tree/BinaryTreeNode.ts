export class BinaryTreeNode<T> {
  public value: T
  public left: BinaryTreeNode<T> | null = null
  public right: BinaryTreeNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}
