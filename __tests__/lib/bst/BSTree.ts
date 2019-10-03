import { BSTree } from '../../../src/lib/tree/bst/BSTree'
import { compare } from '../../../src/lib/type/compareFunction'

describe('BSTree insert method', () => {
  it('should be able add element to the list', () => {
    const testCases = [
      [15, 5, 10, 20, 50, 90, 40],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0],
      [90, 80, 70, 60, 20],
      [5, 5],
      [],
      [null]
    ]
    testCases.forEach(sourceData => {
      const bstTree = new BSTree()
      sourceData.forEach((e: any) => bstTree.insertRoot(e))
      const processedData: any[] = []
      bstTree.traverseDepthFirst(value => processedData.push(value))
      processedData.sort(compare)
      expect(processedData).toEqual(Array.from(new Set(processedData)))
    })
  })
})

describe('BSTree search method', () => {
  it('should be able search element in the list', () => {
    const bstTree = new BSTree()
    const sourceData = [15, 5, 10, 20, 50, 90, 40]
    sourceData.forEach(e => bstTree.insertRoot(e))
    expect(bstTree.searchRoot(1)).toBe(null)
    expect(bstTree.searchRoot(20)).toBeTruthy()
    expect(bstTree.searchRoot(15)).toBeTruthy()
    expect(bstTree.searchRoot(40)).toBeTruthy()
  })
})

describe('BSTree traverseDepthFirst method', () => {
  it('should be able traverse through tree in order', () => {
    const testCases = [
      [15, 5, 10, 20, 50, 90, 40],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0],
      [90, 80, 70, 60, 20],
      []
    ]
    testCases.forEach(sourceData => {
      const bstTree = new BSTree()
      sourceData.forEach(e => bstTree.insertRoot(e))
      const processedData: number[] = []
      bstTree.traverseDepthFirst((value: any) => processedData.push(value))
      sourceData.sort(compare)
      expect(processedData).toEqual(sourceData)
    })
  })
})

describe('BSTree traverseBreathFirst method', () => {
  it('should be able traverse through tree by level', () => {
    const testCases = [[[15, 5, 20], [15, 5, 20]], [[15, 5, 11, 22], [15, 5, 22, 11]], [[], []]]
    testCases.forEach(([sourceData, result]) => {
      const bstTree = new BSTree()
      sourceData.forEach(e => bstTree.insertRoot(e))
      const processedData: number[] = []
      bstTree.traverseBreathFirst((value: any) => processedData.push(value))
      expect(processedData).toEqual(result)
    })
  })
})

describe('BSTree remove method', () => {
  it('should be able to remove element from tree', () => {
    const testCases = [
      [[15, 5, 20], [5], [15, 20]],
      [[15, 5, 20], [15], [5, 20]],
      [[15, 5, 20, 40], [20], [5, 15, 40]],
      [[15, 10, 20, 16], [20], [10, 15, 16]],
      [[], [10], []]
    ]
    testCases.forEach(([sourceData, removed, result]) => {
      const bstTree = new BSTree()
      sourceData.forEach(e => bstTree.insertRoot(e))
      bstTree.removeRoot(removed[0])
      const processedData: number[] = []
      bstTree.traverseDepthFirst((value: any) => processedData.push(value))
      expect(processedData).toEqual(result)
    })
  })
})
