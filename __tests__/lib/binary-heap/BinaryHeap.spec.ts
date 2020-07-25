import { BinaryHeap } from '../../../src'
import { shuffle } from 'lodash'

const sortFunction = (a: number, b: number) => a - b

describe('BinaryHeap add and extract', () => {
  it('should generate correct order of queue', () => {
    const heap = new BinaryHeap<number>()
    const sequence = shuffle([ 50, 60, 20, 30, 100, 80, 10, 90, 40, 70 ])
    sequence.forEach((value: number) => heap.add(value))
    sequence.sort(sortFunction)
    sequence.forEach((value: number) => expect(heap.extract()).toEqual(value))
  })
})

describe('BinaryHeap remove specific value', () => {
  it('should remove an value in the binary heap and keep the order intact', () => {
    const heap = new BinaryHeap<number>()
    let sequence = shuffle([ 50, 60, 20, 30, 100, 80, 10, 90, 40, 70 ])
    sequence.forEach((value: number) => heap.add(value))
    heap.removeNode(50)
    sequence = [10, 20, 30, 40, 60, 70, 80, 90, 100]
    sequence.forEach((value: number) => expect(heap.extract()).toEqual(value))
  })
})
