import { DoublyLinkedList } from '../../../src'
import { fetchArray } from '../../helpers/seed'

describe('DoublyLinkedList', () => {
  describe('#append', () => {
    const testCases = [fetchArray(10), fetchArray(20)]
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
    const testCases = [fetchArray(10), fetchArray(20)]
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
        append: fetchArray(10),
        prepend: fetchArray(10),
      },
      {
        append: fetchArray(10),
        prepend: fetchArray(10),
      },
    ]
    testCases.forEach(({ append, prepend }) => {
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
    const testCases = [fetchArray(10), fetchArray(20)]

    testCases.forEach((testCase: number[]) => {
      it(`with case: ${testCase.join(',')}`, () => {
        const cll = new DoublyLinkedList<number>()
        let originalLength = testCase.length
        testCase.forEach((value: number) => cll.append(value))
        testCase.reverse().forEach((value: number) => {
          originalLength--
          const pop = cll.pop()
          expect(pop!.value).toBe(value)
          expect(cll.length).toBe(originalLength)
        })
        expect(cll.pop()).toBeNull()
      })
    })
  })

  describe('#unshift', () => {
    const testCases = [fetchArray(10), fetchArray(20)]

    testCases.forEach((testCase: number[]) => {
      it(`with case: ${testCase.join(',')}`, () => {
        const cll = new DoublyLinkedList<number>()
        testCase.forEach((value: number) => cll.append(value))
        testCase.forEach((value: number) => {
          const unshift = cll.shift()
          expect(unshift!.value).toBe(value)
        })
        expect(cll.shift()).toBeNull()
      })
    })
  })

  describe('benchmark', () => {
    describe('#append', () => {
      const seed = fetchArray(1000000)
      const arrayLabel = 'push: dynamic array - 1000000'
      const linkedListLabel = 'push: linked list - 1000000'
      console.time(arrayLabel)
      const arr = []
      seed.forEach((value) => arr.push(value))
      console.timeEnd(arrayLabel)
      console.time(linkedListLabel)
      const dll = new DoublyLinkedList<number>()
      seed.forEach((value) => dll.append(value))
      console.timeEnd(linkedListLabel)
    })

    describe('#prepend', () => {
      const seed = fetchArray(100000)
      const arrayLabel = 'unshift: dynamic array - 100000'
      const linkedListLabel = 'unshift: linked list - 100000'
      console.time(arrayLabel)
      const arr = []
      seed.forEach((value) => arr.unshift(value))
      console.timeEnd(arrayLabel)
      console.time(linkedListLabel)
      const dll = new DoublyLinkedList<number>()
      seed.forEach((value) => dll.prepend(value))
      console.timeEnd(linkedListLabel)
    })

    describe('#pop', () => {
      const seed = fetchArray(100000)
      const arrayLabel = 'pop: dynamic array - 100000'
      const linkedListLabel = 'pop: linked list - 100000'
      const arr: number[] = []
      const dll = new DoublyLinkedList<number>()
      seed.forEach((value) => {
        arr.push(value)
        dll.append(value)
      })

      console.time(arrayLabel)
      while (arr.length > 0) {
        arr.pop()
      }
      console.timeEnd(arrayLabel)

      console.time(linkedListLabel)
      while (dll.length > 0) {
        dll.pop()
      }
      console.timeEnd(linkedListLabel)
    })

    describe('#shift', () => {
      const seed = fetchArray(100000)
      const arrayLabel = 'shift: dynamic array - 100000'
      const linkedListLabel = 'shift: linked list - 100000'
      const arr: number[] = []
      const dll = new DoublyLinkedList<number>()
      seed.forEach((value) => {
        arr.push(value)
        dll.append(value)
      })

      console.time(arrayLabel)
      while (arr.length > 0) {
        arr.shift()
      }
      console.timeEnd(arrayLabel)

      console.time(linkedListLabel)
      while (dll.length > 0) {
        dll.shift()
      }
      console.timeEnd(linkedListLabel)
    })
  })
})
