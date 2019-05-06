import { MinHeap } from '../../../../src/lib/tree/heap/MinHeap'

describe('MinHeap insert method', () => {
  it('should correctly insert value to the list in correct order', () => {
    const heap = new MinHeap();
    [6,4,5,1,2,3].forEach(value => heap.insert(value))
    expect(heap.toArray()).toEqual([0, 1, 2, 3, 6, 4, 5])
  })
})
