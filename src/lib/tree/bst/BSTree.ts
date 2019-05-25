import { BSTreeNode } from './BSTreeNode'
import { CompareFunction, compare, ComparableReturn } from '../../type/compareFunction'
import { Nullable } from '../../type/nullable'
import { mapFunction } from '../../type/mapFunction'

export class BSTree<T> {
  public root: Nullable<BSTreeNode<T>> = null
  public compareFn: CompareFunction<T>

  constructor(compareFn: CompareFunction<T> = compare) {
    this.compareFn = compareFn
  }

  public insertRoot(value: T) {
    const node = new BSTreeNode(value)

    if (this.root === null) {
      this.root = node
    } else {
      this.insert(node, this.root)
    }
  }

  public insert(newNode: Nullable<BSTreeNode<T>>, node: Nullable<BSTreeNode<T>>) {
    if (node === null || node.value === null) {
      return
    } else {
      const compareStatus = this.compareFn(newNode!.value, node.value)
      switch (compareStatus) {
        case ComparableReturn.LARGER:
          if (node.right === null) {
            node.right = newNode
          } else {
            this.insert(newNode, node.right)
          }
          break
        case ComparableReturn.SMALLER:
          if (node.left === null) {
            node.left = newNode
          } else {
            this.insert(newNode, node.left)
          }
          break
        default:
          break
      }
    }
  }

  public searchRoot(value: T): Nullable<BSTreeNode<T>> {
    return this.searchNode(value, this.root)
  }

  private searchNode(value: T, node: Nullable<BSTreeNode<T>>): Nullable<BSTreeNode<T>> {
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

  public removeRoot(value: T): Nullable<BSTreeNode<T>> {
    return this.remove(value, this.root)
  }

  public findMin(node: Nullable<BSTreeNode<T>>): Nullable<BSTreeNode<T>> {
    if (node === null || node.value === null) {
      return null
    } else {
      return this.findMin(node.left)
    }
  }

  public remove(value: T, node: Nullable<BSTreeNode<T>>) {
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

  public traverseDepthFirst(callback: mapFunction<T>) {
    this.traverseDepthFirstNode(this.root, callback)
  }

  public traverseDepthFirstNode(node: Nullable<BSTreeNode<T>>, callback: mapFunction<T>) {
    if (node === null) {
      return
    }
    this.traverseDepthFirstNode(node.left, callback)
    callback(node.value)
    this.traverseDepthFirstNode(node.right, callback)
  }

  public traverseBreathFirst(callback: mapFunction<T>) {
    this.traverseBreathFirstNode(this.root, callback)
  }

  public traverseBreathFirstNode(node: Nullable<BSTreeNode<T>>, callback: mapFunction<T>) {
    if (node === null) {
      return
    }
    const queque: BSTreeNode<T>[] = []
    queque.push(node)
    while (queque.length > 0) {
      node = queque.shift()!
      callback(node.value)
      if (node.left) {
        queque.push(node.left)
      }
      if (node.right) {
        queque.push(node.right)
      }
    }
  }
}
