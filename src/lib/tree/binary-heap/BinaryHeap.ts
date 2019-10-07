import {
  CompareFunction,
  compare as defaultCompare,
  ComparableReturn
} from '../../type/compareFunction'

/**
 * Binary Heap class
 *
 * @export
 * @class BinaryHeap
 * @template T
 */
export class BinaryHeap<T> {
  private elements: T[] = []
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
   * Extract least priority element.
   *
   * @returns T
   * @memberof BinaryHeap
   */
  public extract() {
    const element = this.elements[0]
    const end = this.elements.pop()!

    if (this.elements.length > 0) {
      this.elements[0] = end
      this.sinkDown(0)
    }

    return element
  }

  /**
   * Remove certain node
   *
   * @param {T} node
   * @memberof BinaryHeap
   */
  public removeNode(node: T) {
    const size = this.size

    for (let index = 0; index < size - 1; index++) {
      if (this.compare(node, this.elements[index]) !== ComparableReturn.EQUAL) continue

      let end = this.elements.pop()
      if (index === this.elements.length - 1) break

      this.elements[index] = end!
      this.bubbleUp(index)
      this.sinkDown(index)
      break
    }
  }

  /**
   * sink down element by index
   *
   * @private
   * @param {number} index
   * @memberof BinaryHeap
   */
  private sinkDown(index: number) {
    let currentIndex = index
    let element = this.elements[currentIndex]!
    const length = this.elements.length

    while (true) {
      const child2N = (currentIndex + 1) * 2
      const child1N = child2N - 1
      let swapIndex

      if (child1N < length) {
        const child1 = this.elements[child1N]
        if (this.compare(child1, element) < 0) {
          swapIndex = child1N
        }
      }

      if (child2N < length) {
        const child2 = this.elements[child2N]
        if (
          this.compare(
            child2,
            typeof swapIndex === 'undefined' ? element : this.elements[swapIndex]
          ) < 0
        ) {
          swapIndex = child2N
        }
      }
      if (typeof swapIndex === 'undefined') break

      this.elements[currentIndex] = this.elements[swapIndex]
      this.elements[swapIndex] = element

      currentIndex = swapIndex
    }
  }

  /**
   * bubble up element at a certain index.
   *
   * @private
   * @param {number} index
   * @memberof BinaryHeap
   */
  private bubbleUp(index: number) {
    let currentIndex = index
    let element = this.elements[index]
    if (typeof element === 'undefined') return

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex + 1) / 2) - 1
      const parent = this.elements[parentIndex]!

      if (this.compare(element, parent) >= 0) break

      this.elements[parentIndex] = element
      this.elements[currentIndex] = parent
      currentIndex = parentIndex
    }
  }

  /**
   * Return the size of the heap.
   *
   * @readonly
   * @type {number}
   * @memberof BinaryHeap
   */
  get size(): number {
    return this.elements.length
  }
}
