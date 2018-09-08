import { BinaryTreeNode } from '../general/BinaryTreeNode'
import { isNull } from 'lodash'

export type InterfaceCallbackBinaryTree<T> = (node: BinaryTreeNode<T>) => any

/**
 * BinaryTree general class
 *
 * @export
 * @class BinaryTree
 * @template T
 */
export class BinaryTree<T> {
  /**
   * binary tree root
   *
   * @private
   * @type {(BinaryTreeNode<T>| null)}
   * @memberof BinaryTree
   */
  private root: BinaryTreeNode<T> | null = null

  /**
   * get height of a node in the tree
   *
   * @param {(BinaryTreeNode<T> | null)} node
   * @returns {number}
   * @memberof BinaryTree
   */
  public getHeightByNode(node: BinaryTreeNode<T> | null): number {
    if (isNull(node)) {
      return 0
    } else {
      return (
        1 +
        Math.max(
          this.getHeightByNode(node.getLeftNode()),
          this.getHeightByNode(node.getRightNode())
        )
      )
    }
  }

  /**
   * get current tree node height
   *
   * @returns {number}
   * @memberof BinaryTree
   */
  public getHeight(): number {
    return this.getHeightByNode(this.root)
  }

  /**
   * get number of descendant of a tree node
   *
   * @param {(BinaryTreeNode<T> | null)} node
   * @returns {number}
   * @memberof BinaryTree
   */
  public getSizeByNode(node: BinaryTreeNode<T> | null): number {
    if (isNull(node)) {
      return 0
    } else {
      return 1 + this.getSizeByNode(node.getLeftNode()) + this.getSizeByNode(node.getRightNode())
    }
  }

  /**
   * get number of descendant of tree
   *
   * @returns {number}
   * @memberof BinaryTree
   */
  public getSize(): number {
    return this.getSizeByNode(this.root)
  }

  /**
   * traverse tree from a node via recursive method
   *
   * @param {(BinaryTreeNode<T> | null)} node
   * @param {InterfaceCallbackBinaryTree<T>} callBack
   * @memberof BinaryTree
   */
  public naiveTraverseNode(
    node: BinaryTreeNode<T> | null,
    callBack: InterfaceCallbackBinaryTree<T>
  ): void {
    if (!isNull(node)) {
      callBack(node)
      this.naiveTraverseNode(node.getLeftNode(), callBack)
      this.naiveTraverseNode(node.getLeftNode(), callBack)
    }
  }

  /**
   * tree traverse via recursive method
   *
   * @param {InterfaceCallbackBinaryTree<T>} callBack
   * @returns {void}
   * @memberof BinaryTree
   */
  public naiveTraverse(callBack: InterfaceCallbackBinaryTree<T>): void {
    return this.naiveTraverseNode(this.root, callBack)
  }
}
