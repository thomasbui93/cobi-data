import { Stack } from '../../../src/lib/stack/index'
describe('Stack push and pop method', () => {
  it('should be able add element to the list', () => {
    const stack: Stack<number> = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.getLength()).toBe(3)
    const expectedArray = [3, 2, 1]
    while (stack.getLength() > 0) {
      expect(stack.pop()).toEqual(expectedArray.shift())
    }
  })
})