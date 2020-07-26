import { BinaryHeap } from '../../../src'
import { uniqueArrayShuffle } from '../../helpers/seed'

const sortFunction = (a: number, b: number) => a - b

describe('BinaryHeap add and extract', () => {
  const testCases = [
    uniqueArrayShuffle(10),
    uniqueArrayShuffle(20),
    uniqueArrayShuffle(50)
  ]
  testCases.forEach((sequence) => {
    it(`should generate correct order of queue: ${sequence.join(',')}`, () => {
      const heap = new BinaryHeap<number>()
      sequence.forEach((value: number) => heap.add(value))
      sequence.sort(sortFunction)
      sequence.forEach((value: number) => expect(heap.extract()).toEqual(value))
    })
  })

  it(`extract return null if the heap is empty`, () => {
    const heap = new BinaryHeap<number>()
    expect(heap.extract()).toBeNull()
  })

  it(`#add duplicate value`, () => {
    const heap = new BinaryHeap<number>()
    const testCase = [10, 15, 20, 15, 20, 15, 20, 15, 10]
    testCase.forEach(value => heap.add(value))
    testCase.sort(sortFunction)
    testCase.forEach((value: number) => expect(heap.extract()).toEqual(value))
  })
})
