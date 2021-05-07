export class TrieNode {
  public value: string
  public children: Map<string, TrieNode>
  public isEndOfAWord: boolean

  constructor(value: string) {
    this.value = value
    this.children = new Map()
    this.isEndOfAWord = false
  }

  public hasChildren() {
    return this.children.size === 0
  }
}
