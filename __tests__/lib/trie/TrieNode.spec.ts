import { TrieNode } from '../../../src'

describe("TrieNode", () => {
  describe("hasChildren", () => {
    it("return true if children list is empty", () => {
      const trieNode = new TrieNode("a")
      expect(trieNode.hasChildren()).toBeTruthy()
    })

    it("return false if children list is not empty", () => {
      const trieNode = new TrieNode("a")
      trieNode.children.set("b", new TrieNode("*"))
      expect(trieNode.hasChildren()).toBeFalsy()
    })
  })
})
