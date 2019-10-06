import { BinaryTreeNode } from './BinaryTreeNode'
import { Nullable } from '../../type/nullable'
import { mapFunction } from '../../type/mapFunction'
import { Queue } from '../../linear/queue'

/**
 * Generic Binary Tree
 *
 * @export
 * @class BinaryTree
 * @template T
 */
export class BinaryTree<T> {
  /**
   * root
   *
   * @type {Nullable<BinaryTreeNode<T>>}
   * @memberof BSTree
   */
  public root: Nullable<BinaryTreeNode<T>> = null

  /**
   * Treverse depth first
   *
   * @param {mapFunction<T>} callback
   * @memberof BSTree
   */
  public traverseDepthFirst(callback: mapFunction<T>) {
    this.traverseDepthFirstNode(this.root, callback)
  }

  /**
   *
   *  Traverse depth first for a subtree
   * @param {Nullable<BinaryTreeNode<T>>} node
   * @param {mapFunction<T>} callback
   * @memberof BSTree
   */
  public traverseDepthFirstNode(node: Nullable<BinaryTreeNode<T>>, callback: mapFunction<T>) {
    if (node === null) {
      return
    }
    this.traverseDepthFirstNode(node.left, callback)
    callback(node.value)
    this.traverseDepthFirstNode(node.right, callback)
  }

  /**
   * Traverse breath first
   *
   * @param {mapFunction<T>} callback
   * @memberof BSTree
   */
  public traverseBreathFirst(callback: mapFunction<T>) {
    this.traverseBreathFirstNode(this.root, callback)
  }

  /**
   * Traverse breath first for subtree
   *
   * @param {Nullable<BinaryTreeNode<T>>} node
   * @param {mapFunction<T>} callback
   * @memberof BSTree
   */
  public traverseBreathFirstNode(node: Nullable<BinaryTreeNode<T>>, callback: mapFunction<T>) {
    if (node === null) {
      return
    }
    const queue: Queue<Nullable<BinaryTreeNode<T>>> = new Queue<Nullable<BinaryTreeNode<T>>>()
    queue.queue(node)
    while (queue.length > 0) {
      node = queue.dequeue()!
      callback(node.value)
      if (node.left) {
        queue.queue(node.left)
      }
      if (node.right) {
        queue.queue(node.right)
      }
    }
  }
}
