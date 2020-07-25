import { Stack } from '../../../src/lib/linear/stack/index'
describe('Stack push and pop method', () => {
  const testCases = [
    [1,2,3,4,5,6],
    [6,5,4,3,2,1]
  ]
  testCases.forEach((testCase: number[]) => {
    it(`with case ${testCase.join(',')}`, () => {
      const stack: Stack<number> = new Stack()
      testCase.forEach(value => stack.push(value))
      testCase.reverse().forEach((value) => {
        expect(stack.pop()).toBe(value)
      })
    })
  })

  it('should be able add element to the list', () => {
    const stack: Stack<number> = new Stack()
    expect(stack.pop()).toBeNull()
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
