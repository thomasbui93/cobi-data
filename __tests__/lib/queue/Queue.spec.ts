import { Queue } from '../../../src'
import { fetchArray } from '../../helpers/seed'

describe('Queue', () => {
  describe('#enqueue and #dequeue', () => {
    const testCases = [
      fetchArray(10),
      fetchArray(20)
    ]
    testCases.forEach((testCase: number[]) => {
      it(`with case ${testCase.join(',')}`, () => {
        const queue: Queue<number> = new Queue()
        testCase.forEach(value => queue.enqueue(value))
        testCase.forEach((value) => {
          expect(queue.dequeue()).toBe(value)
        })
      })
    })
    it('return null when dequeue queue is empty', () => {
      const queue: Queue<number> = new Queue()
      expect(queue.dequeue()).toBeNull()
    })
  })

  describe('#length', () => {
    const testCases = [
      fetchArray(10),
      fetchArray(20)
    ]
    testCases.forEach((testCase: number[]) => {
      it(`with case ${testCase.join(',')}`, () => {
        const queue: Queue<number> = new Queue()
        testCase.forEach(value => queue.enqueue(value))
        expect(queue.length).toBe(testCase.length)
        expect(queue.isEmpty()).toBe(false)
      })
    })
  
    it('should return true is queue is empty', () => {
      const queue: Queue<number> = new Queue()
      expect(queue.isEmpty()).toEqual(true)
    })
  })
})
