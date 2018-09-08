import { isNull } from 'lodash'

/**
 * Binary Tree Node
 *
 * @export
 * @class BinaryTreeNode
 */
export class BinaryTreeNode<T> {
  private data: T
  private right: null | BinaryTreeNode<T> = null
  private left: null | BinaryTreeNode<T> = null

  /**
   * BinaryTreeNode constructor
   * @param data T
   */
  constructor(data: T) {
    this.data = data
  }

  /**
   * update node data
   *
   * @param {T} data
   * @memberof BinaryTreeNode
   */
  public setData(data: T): void {
    this.data = data
  }

  /**
   * get node data
   *
   * @returns {T}
   * @memberof BinaryTreeNode
   */
  public getData(): T {
    return this.data
  }

  /**
   * get the right child
   *
   * @returns {(null | BinaryTreeNode<T>)}
   * @memberof BinaryTreeNode
   */
  public getRightNode(): null | BinaryTreeNode<T> {
    return this.right
  }

  /**
   * update data for the right child
   *
   * @param {T} data
   * @memberof BinaryTreeNode
   */
  public setRightNode(data: T): void {
    if (isNull(this.right)) {
      this.right = new BinaryTreeNode(data)
    } else {
      this.right.setData(data)
    }
  }

  /**
   * get left node
   *
   * @returns {(null | BinaryTreeNode<T>)}
   * @memberof BinaryTreeNode
   */
  public getLeftNode(): null | BinaryTreeNode<T> {
    return this.left
  }

  /**
   * update data for the left child
   *
   * @param {T} data
   * @memberof BinaryTreeNode
   */
  public setLeftNode(data: T): void {
    if (isNull(this.left)) {
      this.left = new BinaryTreeNode(data)
    } else {
      this.left.setData(data)
    }
  }
}
