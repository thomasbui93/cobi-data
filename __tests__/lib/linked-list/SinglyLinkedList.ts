import { SinglyLinkedList } from '../../../src/lib/linear/linked-list'

describe('SinglyLinkedList', () => {
  const testCases = [[], [1], [2, 3, 4]]

  describe('constructor', () => {
    testCases.forEach(list => {
      it(`should construct the list exactly the order of value: ${list.join(', ')}`, () => {
        const singlyLinkedList = new SinglyLinkedList<number>(list)
        expect(list).toEqual(singlyLinkedList.toArray())
      })
    })
  })

  describe('append method', () => {
    it('should append one value to empty SinglyLinkedList', () => {
      const singlyLinkedList = new SinglyLinkedList<number>()
      singlyLinkedList.append(1)
      const list = singlyLinkedList.toArray()
      expect(list).toEqual([1])
    })
    it('should append one value to existing SinglyLinkedList', () => {
      const singlyLinkedList = new SinglyLinkedList<number>()
      singlyLinkedList.append(1)
      singlyLinkedList.append(2)
      singlyLinkedList.append(3)
      const list = singlyLinkedList.toArray()
      expect(list).toEqual([1, 2, 3])
    })
  })

  describe('prepend method', () => {
    it('should prepend one value to empty SinglyLinkedList', () => {
      const singlyLinkedList = new SinglyLinkedList<number>()
      singlyLinkedList.prepend(1)
      const list = singlyLinkedList.toArray()
      expect(list).toEqual([1])
    })
    it('should prepend one value to existing SinglyLinkedList', () => {
      const singlyLinkedList = new SinglyLinkedList<number>()
      singlyLinkedList.append(1)
      singlyLinkedList.append(2)
      singlyLinkedList.prepend(3)
      const list = singlyLinkedList.toArray()
      expect(list).toEqual([3, 1, 2])
    })
  })

  describe('appendAfter method', () => {
    it('should insert one value to empty SinglyLinkedList', () => {
      const singlyLinkedList = new SinglyLinkedList<number>()
      singlyLinkedList.appendAfter(1, 5)
      const list = singlyLinkedList.toArray()
      expect(list).toEqual([1])
    })

    it('should insert in the start of the existing SinglyLinkedList', () => {
      const singlyLinkedList = new SinglyLinkedList<number>([1, 2, 3, 4])
      singlyLinkedList.appendAfter(10, -1)
      expect(singlyLinkedList.toArray()).toEqual([10, 1, 2, 3, 4])
    })

    it('should insert in the end of the existing SinglyLinkedList', () => {
      const singlyLinkedList = new SinglyLinkedList<number>([1, 2, 3, 4])
      singlyLinkedList.appendAfter(10, 3)
      expect(singlyLinkedList.toArray()).toEqual([1, 2, 3, 4, 10])
    })

    it('should insert in between of the existing SinglyLinkedList', () => {
      const singlyLinkedList = new SinglyLinkedList<number>([1, 2, 3, 4])
      singlyLinkedList.appendAfter(10, 2)
      expect(singlyLinkedList.toArray()).toEqual([1, 2, 3, 10, 4])
    })

    it('should not insert any thing to the existing SinglyLinkedList if it is out of range ', () => {
      const singlyLinkedList = new SinglyLinkedList<number>([1, 2, 3, 4])
      expect(singlyLinkedList.appendAfter(10, 4)).toBeFalsy()
      expect(singlyLinkedList.toArray()).toEqual([1, 2, 3, 4])
    })
  })

  describe('removeAt method', () => {
    it('should not throw error when perform against empty list', () => {
      const singlyLinkedList = new SinglyLinkedList<number>()
      expect(singlyLinkedList.removeAt(1)).toBeFalsy()
    })

    it('should perform remove at the regular cases of the list', () => {
      ;[
        [[1, 2, 3, 4, 5], [2], [1, 2, 4, 5]],
        [[1, 2, 3, 4, 5], [3], [1, 2, 3, 5]],
        [[1, 2, 3, 4, 5], [1], [1, 3, 4, 5]]
      ].forEach(testCase => {
        const [source, index, result] = testCase
        const singlyLinkedList = new SinglyLinkedList<number>(source)
        singlyLinkedList.removeAt(index[0])
        expect(singlyLinkedList.toArray()).toEqual(result)
      })
    })

    it('should perform remove at the start of the list', () => {
      const singlyLinkedList = new SinglyLinkedList<number>([1, 2, 3, 4])
      singlyLinkedList.removeAt(0)
      expect(singlyLinkedList.toArray()).toEqual([2, 3, 4])
    })

    it('should perform remove at the start of the list', () => {
      const singlyLinkedList = new SinglyLinkedList<number>([1, 2, 3, 4])
      singlyLinkedList.removeAt(3)
      expect(singlyLinkedList.toArray()).toEqual([1, 2, 3])
    })

    it('should not delete any thing to the existing SinglyLinkedList if it is out of range', () => {
      const singlyLinkedList = new SinglyLinkedList<number>([1, 2, 3, 4])
      expect(singlyLinkedList.removeAt(-1)).toBeFalsy()
      expect(singlyLinkedList.removeAt(4)).toBeFalsy()
      expect(singlyLinkedList.removeAt(7)).toBeFalsy()
      expect(singlyLinkedList.toArray()).toEqual([1, 2, 3, 4])
    })
  })

  describe('getAt', () => {
    it('should get correct value for given valid index', () => {
      ;[
        [[1, 2, 3, 4, 5], [4], [5]],
        [[1, 2, 3, 4, 5], [2], [3]],
        [[1, 2, 3, 4, 5], [3], [4]],
        [[1, 2, 3, 4, 5], [1], [2]],
        [[1, 2, 3, 4, 5], [0], [1]]
      ].forEach(testCase => {
        const [source, index, result] = testCase
        const singlyLinkedList = new SinglyLinkedList<number>(source)
        expect(singlyLinkedList.getAt(index[0])).toEqual(result[0])
      })
    })

    it('should throw Error if index are out of range', () => {
      const singlyLinkedList = new SinglyLinkedList<number>([1, 2, 3, 4, 5])
      try {
        singlyLinkedList.getAt(-1)
      } catch (err) {
        expect(err.message).toEqual('Index is out of range')
      }
      try {
        singlyLinkedList.getAt(10)
      } catch (err) {
        expect(err.message).toEqual('Index is out of range')
      }
    })
  })

  describe('reverse', () => {
    testCases.forEach(list => {
      it(`should reverse the order of values: ${list.join(', ')}`, () => {
        const singlyLinkedList = new SinglyLinkedList<number>(list)
        singlyLinkedList.reverse()
        expect(list.reverse()).toEqual(singlyLinkedList.toArray())
      })
    })
  })

  describe('clear method', () => {
    testCases.forEach(list => {
      it(`should reset the list to empty state: ${list.join(', ')}`, () => {
        const singlyLinkedList = new SinglyLinkedList<number>()
        list.forEach(value => singlyLinkedList.append(value))
        singlyLinkedList.clear()
        expect([]).toEqual(singlyLinkedList.toArray())
      })
    })
  })

  describe('toArray method', () => {
    testCases.forEach(list => {
      it(`should collect exactly the order of value: ${list.join(', ')}`, () => {
        const singlyLinkedList = new SinglyLinkedList<number>()
        list.forEach(value => singlyLinkedList.append(value))
        expect(list).toEqual(singlyLinkedList.toArray())
      })
    })
  })
})
