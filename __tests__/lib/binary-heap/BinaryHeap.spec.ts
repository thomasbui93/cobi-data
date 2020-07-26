import { BinaryHeap } from '../../../src'
import { uniqueArrayShuffle } from '../../helpers/seed'

const sortFunction = (a: number, b: number) => a - b

describe("BinaryHeap", () => {
  describe('add and extract', () => {
    const testCases = [
      uniqueArrayShuffle(10),
      uniqueArrayShuffle(20),
      uniqueArrayShuffle(50)
    ]
    testCases.forEach((testCase) => {
      it(`should generate correct order of queue: ${testCase.join(',')}`, () => {
        const heap = new BinaryHeap<number>()
        testCase.forEach((value: number) => heap.add(value))
        testCase.sort(sortFunction)
        testCase.forEach((value: number) => expect(heap.extract()).toEqual(value))
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

  describe("deleteAtIndex", () => {
    const testCases = [
      uniqueArrayShuffle(10),
      uniqueArrayShuffle(20),
    ]

    testCases.forEach((testCase) => {
      const randomIndex = Math.floor(Math.random() * testCase.length)
      it(`case ${testCase.join(',')}, ${randomIndex}`, () => {
        const heap = new BinaryHeap<number>()
        testCase.forEach((value: number) => heap.add(value))
        testCase = testCase.filter((value) => value !== heap.list[randomIndex + 1])
        testCase.sort(sortFunction)
        heap.deleteAtIndex(randomIndex)
        testCase.forEach((value: number) => expect(heap.extract()).toEqual(value))
      })
    })
  })
})

