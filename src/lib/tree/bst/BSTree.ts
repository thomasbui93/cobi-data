import { BinaryTreeNode } from '../binary-tree/BinaryTreeNode'
import { CompareFunction, compare, ComparableReturn } from '../../type/compareFunction'
import { Nullable } from '../../type/nullable'
import { BinaryTree } from '../binary-tree/BinaryTree'

/**
 * Binary Search Tree
 *
 * @export
 * @class BSTree
 * @template T
 */
export class BSTree<T> extends BinaryTree<T> {
  /**
   * compare function
   *
   * @type {CompareFunction<T>}
   * @memberof BSTree
   */
  public compareFn: CompareFunction<T>

  /**
   * Creates an instance of BSTree.
   * Pass comparing function.
   * @param {CompareFunction<T>} [compareFn=compare]
   * @memberof BSTree
   */
  constructor(compareFn: CompareFunction<T> = compare) {
    super()
    this.compareFn = compareFn
  }

  /**
   * Insert value from binary tree
   *
   * @param {T} value
   * @memberof BSTree
   */
  public insert(value: T) {
    const node = new BinaryTreeNode(value)

    if (this.root === null) {
      this.root = node
    } else {
      this.insertNode(node, this.root)
    }
  }

  /**
   * Insert new binary tree node to a subtree
   *
   * @param {Nullable<BinaryTreeNode<T>>} newNode
   * @param {Nullable<BinaryTreeNode<T>>} node
   * @memberof BSTree
   */
  public insertNode(newNode: Nullable<BinaryTreeNode<T>>, node: Nullable<BinaryTreeNode<T>>) {
    if (node === null || node.value === null) {
      return
    } else {
      const compareStatus = this.compareFn(newNode!.value, node.value)
      switch (compareStatus) {
        case ComparableReturn.LARGER:
          if (node.right === null) {
            node.right = newNode
          } else {
            this.insertNode(newNode, node.right)
          }
          break
        case ComparableReturn.SMALLER:
          if (node.left === null) {
            node.left = newNode
          } else {
            this.insertNode(newNode, node.left)
          }
          break
        default:
          break
      }
    }
  }

  /**
   * Search element in the binary tree
   *
   * @param {T} value
   * @returns {Nullable<BinaryTreeNode<T>>}
   * @memberof BSTree
   */
  public search(value: T): Nullable<BinaryTreeNode<T>> {
    return this.searchNode(value, this.root)
  }

  /**
   * Search element in a sub tree
   *
   * @private
   * @param {T} value
   * @param {Nullable<BinaryTreeNode<T>>} node
   * @returns {Nullable<BinaryTreeNode<T>>}
   * @memberof BSTree
   */
  private searchNode(value: T, node: Nullable<BinaryTreeNode<T>>): Nullable<BinaryTreeNode<T>> {
    if (node === null || node.value === null) {
      return null
    } else {
      const compareStatus = this.compareFn(value, node.value)
      switch (compareStatus) {
        case ComparableReturn.LARGER:
          return this.searchNode(value, node.right)
        case ComparableReturn.SMALLER:
          return this.searchNode(value, node.left)
        default:
          return node
      }
    }
  }

  /**
   * Remove root element
   *
   * @param {T} value
   * @returns {Nullable<BinaryTreeNode<T>>}
   * @memberof BSTree
   */
  public removeRoot(value: T): Nullable<BinaryTreeNode<T>> {
    return this.remove(value, this.root)
  }

  /**
   * Find minimal element in the tree
   *
   * @param {Nullable<BinaryTreeNode<T>>} node
   * @returns {Nullable<BinaryTreeNode<T>>}
   * @memberof BSTree
   */
  public findMin(node: Nullable<BinaryTreeNode<T>>): Nullable<BinaryTreeNode<T>> {
    if (node === null || node.value === null) {
      return null
    } else {
      return this.findMin(node.left)
    }
  }

  /**
   * Remove an element from the tree
   *
   * @param {T} value
   * @param {Nullable<BinaryTreeNode<T>>} node
   * @returns
   * @memberof BSTree
   */
  public remove(value: T, node: Nullable<BinaryTreeNode<T>>) {
    if (node === null) {
      return null
    } else {
      const compareStatus = this.compareFn(value, node.value)
      switch (compareStatus) {
        case ComparableReturn.LARGER:
          node.right = this.remove(value, node.right)
          return node
        case ComparableReturn.SMALLER:
          node.left = this.remove(value, node.left)
          return node
        default:
          if (node.left === null && node.right === null) {
            node = null
            return node
          }
          if (node.left === null) {
            node = node.right
            return node
          }
          if (node.right === null) {
            node = node.left
            return node
          }
          const minValue = this.findMin(node.right)
          node.value = minValue ? minValue.value : node.right.value
          node.right = this.remove(node.value, node.right)
          return node
      }
    }
  }
}
