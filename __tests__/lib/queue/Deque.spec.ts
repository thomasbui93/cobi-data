import { Deque } from '../../../src'
import { fetchArray } from '../../helpers/seed'

describe('Deque', () => {
  describe('#insertFront and #removeRear', () => {
    const testCases = [fetchArray(10), fetchArray(20)]
    testCases.forEach((testCase: number[]) => {
      it(`with case ${testCase.join(',')}`, () => {
        const deque: Deque<number> = new Deque()
        testCase.forEach((value) => deque.insertFront(value))
        testCase.forEach((value) => {
          expect(deque.removeRear()).toBe(value)
        })
      })
    })

    it(`with case []`, () => {
      const deque: Deque<number> = new Deque()
      expect(deque.removeRear()).toBeNull()
    })
  })

  describe('#insertRear and #removeFront', () => {
    const testCases = [fetchArray(10), fetchArray(20)]
    testCases.forEach((testCase: number[]) => {
      it(`with case ${testCase.join(',')}`, () => {
        const deque: Deque<number> = new Deque()
        testCase.forEach((value) => deque.insertRear(value))
        testCase.forEach((value) => {
          expect(deque.removeFront()).toBe(value)
        })
      })
    })
    it(`with case []`, () => {
      const deque: Deque<number> = new Deque()
      expect(deque.removeFront()).toBeNull()
    })
  })

  describe('#getFront', () => {
    const testCases = [fetchArray(10), fetchArray(20)]
    testCases.forEach((testCase: number[]) => {
      it(`with case ${testCase.join(',')}`, () => {
        const deque: Deque<number> = new Deque()
        testCase.forEach((value) => deque.insertRear(value))
        expect(deque.getFront()).toBe(testCase[0])
      })
    })
    it(`with case []`, () => {
      const deque: Deque<number> = new Deque()
      expect(deque.getFront()).toBeNull()
    })
  })

  describe('#getRear', () => {
    const testCases = [fetchArray(10), fetchArray(20)]
    testCases.forEach((testCase: number[]) => {
      it(`with case ${testCase.join(',')}`, () => {
        const deque: Deque<number> = new Deque()
        testCase.forEach((value) => deque.insertRear(value))
        expect(deque.getRear()).toBe(testCase[testCase.length - 1])
      })
    })
    it(`with case []`, () => {
      const deque: Deque<number> = new Deque()
      expect(deque.getRear()).toBeNull()
    })
  })

  describe('#size', () => {
    const testCases = [fetchArray(10), fetchArray(20)]
    testCases.forEach((testCase: number[]) => {
      it(`with case ${testCase.join(',')}`, () => {
        const deque: Deque<number> = new Deque()
        testCase.forEach((value) => deque.insertRear(value))
        expect(deque.size).toBe(testCase.length)
      })
    })
  })
})
