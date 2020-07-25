import { DoublyLinkedList } from '../../../src'
import { fetchArray } from '../../helpers/seed'

describe('DoublyLinkedList', () => {
  describe('#append', () => {
    const testCases = [
      fetchArray(10),
      fetchArray(20)
    ]
    testCases.forEach((testCase: number[]) => {
      it(`with case: ${testCase.join(',')}`, () => {
        const originalLength = testCase.length
        const cll = new DoublyLinkedList<number>()
        testCase.forEach((value: number) => cll.append(value))
        cll.traverse((value: number) => {
          expect(testCase.shift()).toBe(value)
        })
        expect(cll.length).toBe(originalLength)
      })
    })
  })

  describe('#prepend', () => {
    const testCases = [
      [1,2,3,4,5],
      [5,4,3,2,1]
    ]
    testCases.forEach((testCase: number[]) => {
      it(`with case: ${testCase.join(',')}`, () => {
        const originalLength = testCase.length
        const cll = new DoublyLinkedList<number>()
        testCase.forEach((value: number) => cll.prepend(value))
        cll.traverse((value: number) => {
          expect(testCase.pop()).toBe(value)
        })
        expect(cll.length).toBe(originalLength)
      })
    })
  })

  describe('mix between operation', () => {
    const testCases = [
      {
        append: [1,3,5,7],
        prepend: [2,4,6,8]
      },
      {
        append: [9,11,13,15],
        prepend: [10,12,14,16]
      },
    ]
    testCases.forEach(({append, prepend}) => {
      it(`with case append: ${append.join(',')}, prepend: ${prepend.join(',')}`, () => {
        const cll = new DoublyLinkedList<number>()
        const result: number[] = []
        append.forEach((appendValue, index) => {
          const prependValue = prepend[index]
          cll.append(appendValue)
          result.push(appendValue)
          cll.prepend(prependValue)
          result.unshift(prependValue)
        })
        cll.traverse((value: number) => {
          expect(result.shift()).toBe(value)
        })
      })
    })
  })

  describe('#pop', () => {
    const testCases = [
      [1,2,3,4,5],
      [5,4,3,2,1]
    ]

    testCases.forEach((testCase: number[]) => {
      it(`with case: ${testCase.join(',')}`, () => {
        const cll = new DoublyLinkedList<number>()
        let originalLength = testCase.length
        testCase.forEach((value: number) => cll.append(value))
        testCase.reverse().forEach((value: number) => {
          originalLength --
          const pop = cll.pop()
          expect(pop!.value).toBe(value)
          expect(cll.length).toBe(originalLength)
        })
        expect(cll.pop()).toBeNull()
      })
    })
  })

  describe('#unshift', () => {
    const testCases = [
      [1,2,3,4,5],
      [5,4,3,2,1]
    ]

    testCases.forEach((testCase: number[]) => {
      it(`with case: ${testCase.join(',')}`, () => {
        const cll = new DoublyLinkedList<number>()
        testCase.forEach((value: number) => cll.append(value))
        testCase.forEach((value: number) => {
          const unshift = cll.unshift()
          expect(unshift!.value).toBe(value)
        })
        expect(cll.unshift()).toBeNull()
      })
    })
  })
})
