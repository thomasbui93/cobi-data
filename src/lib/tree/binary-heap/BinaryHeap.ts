import {
  CompareFunction,
  compare as defaultCompare,
  ComparableReturn
} from '../../type/compareFunction'
import { Nullable } from '../../type/nullable'

/**
 * Binary Heap class
 *
 * @export
 * @class BinaryHeap
 * @template T
 */
export class BinaryHeap<T> {
  private elements: Nullable<T>[] = [null]
  private compare: CompareFunction<T>

  /**
   *
   * @param compare CompareFunction<T>
   */
  constructor(compare: CompareFunction<T> = defaultCompare) {
    this.compare = compare
  }

  /**
   * Add element to the heap
   * @param element T
   */
  public add(element: T) {
    this.elements.push(element)
    this.bubbleUp(this.elements.length - 1)
  }

  /**
   * bubble up element at a certain index.
   *
   * @private
   * @param {number} index
   * @memberof BinaryHeap
   */
  private bubbleUp(index: number) {
    while (Math.floor(index / 2) > 0) {
      const parentIndex = Math.floor(index / 2)
      if (this.compare(this.elements[parentIndex]!, this.elements[index]!) > 0) {
        this.swapIndex(index, parentIndex)
      }
      index = parentIndex
    }
  }

  /**
   * Extract least priority element.
   * <br/> Remove the first element from the list.
   * <br/> Replace it with the last element from the list.
   * <br/> Fix the order by using sinkDown method for the first element.
   *
   * @returns {Nullable<T>}
   * @memberof BinaryHeap
   */
  public extract(): Nullable<T> {
    if (this.size > 0) {
      const min = this.elements[1]
      this.elements[1] = this.elements[this.size]
      this.elements.pop()
      this.sinkDown(1)
      return min
    }
    return null
  }

  /**
   * Swap out of order parent-child dynamic by given order.
   * <br/> Compare parent with minimum child and swap the value iteratively.
   * @private
   * @param {number} index
   * @memberof BinaryHeap
   */
  private sinkDown(index: number) {
    while (index * 2 <= this.size) {
      const mcIndex = this.minChild(index)
      if (this.compare(this.elements[index]!, this.elements[mcIndex]!) > 0) {
        this.swapIndex(index, mcIndex)
      }
      index = mcIndex
    }
  }

  /**
   * Get the minimum direct child of given index
   *
   * @param index
   */
  private minChild(index: number) {
    // If the odd child is out of bound, return the even child.
    if (index * 2 + 1 > this.size) {
      return index * 2
    }
    // Compare between odd and even children.
    if (this.compare(this.getLeftChild(index)!, this.getRightChild(index)!) < 0) {
      return index * 2
    }
    return 2 * index + 1
  }

  /**
   * Swap value between two indexes.
   *
   * @param i
   * @param j
   */
  private swapIndex(i: number, j: number) {
    const temp = this.elements[i]
    this.elements[i] = this.elements[j]
    this.elements[j] = temp
  }

  private getLeftChild(index: number): Nullable<T> {
    return this.elements[index * 2]
  }

  private getRightChild(index: number): Nullable<T> {
    return this.elements[index * 2 + 1]
  }

  /**
   * Return the size of the heap.
   *
   * @readonly
   * @type {number}
   * @memberof BinaryHeap
   */
  get size(): number {
    return this.elements.length - 1
  }
}
