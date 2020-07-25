import { Stack } from '../../../src'
import { fetchArray } from '../../helpers/seed'

describe('Stack push and pop method', () => {
  const testCases = [
    fetchArray(10),
    fetchArray(20)
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
