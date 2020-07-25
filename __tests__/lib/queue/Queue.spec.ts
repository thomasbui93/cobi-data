import { Queue } from '../../../src/lib/linear/queue/index'

describe('Queue', () => {
  describe('#enqueue and #dequeue', () => {
    const testCases = [
      [1,2,3,4,5,6],
      [6,5,4,3,2,1]
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
      [1,2,3,4,5,6],
      [6,5,4,3,2,1]
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
