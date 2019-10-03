import { Queue } from '../../../src/lib/linear/queue/index'

describe('Queue push and pop method', () => {
  it('should be able add element to the list', () => {
    const queue: Queue<number> = new Queue()
    queue.queue(1)
    queue.queue(2)
    queue.queue(3)
    expect(queue.length).toBe(3)
    const expectedArray = [3, 2, 1]
    while (queue.length > 0) {
      expect(queue.dequeue()).toEqual(expectedArray.pop())
    }
  })

  it('should be able add element to the empty list', () => {
    const queue: Queue<number> = new Queue()
    expect(queue.dequeue()).toEqual(undefined)
  })
})

describe('Queue getLength and isEmpty', () => {
  it('should get correct length of the list', () => {
    const queue: Queue<number> = new Queue()
    queue.queue(1)
    queue.queue(2)
    queue.queue(3)
    expect(queue.length).toBe(3)
    expect(queue.isEmpty()).toBe(false)
  })

  it('should return true is queue is empty', () => {
    const queue: Queue<number> = new Queue()
    expect(queue.isEmpty()).toEqual(true)
  })
})
