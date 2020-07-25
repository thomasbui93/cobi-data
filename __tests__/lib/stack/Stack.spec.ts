import { Stack } from '../../../src/lib/linear/stack/index'
describe('Stack push and pop method', () => {
  it('should be able add element to the list', () => {
    const stack: Stack<number> = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.length).toBe(3)
    const expectedArray = [3, 2, 1]
    while (stack.length > 0) {
      expect(stack.pop()).toEqual(expectedArray.shift())
    }
  })

  it('should be able add element to the list', () => {
    const stack: Stack<number> = new Stack()
    expect(stack.pop()).toEqual(undefined)
  })
})

describe('Stack getLength and isEmpty', () => {
  it('should get correct length of the list', () => {
    const stack: Stack<number> = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.length).toBe(3)
    expect(stack.isEmpty()).toBe(false)
  })

  it('should return true is stack is empty', () => {
    const stack: Stack<number> = new Stack()
    expect(stack.isEmpty()).toEqual(true)
  })
})
