import { TrieType } from './TrieType'
import { TrieNode } from './TrieNode'

/**
 * Trie
 *
 * @export
 * @class Trie
 */
export class Trie implements TrieType {
  private root: TrieNode

  constructor() {
    this.root = new TrieNode('*')
  }

  /**
   * Add a word to the trie.
   *
   * @param {string} word
   * @memberof Trie
   * @returns {this}
   */
  public insert(word: string): this {
    if (word.length === 0) return this

    let node = this.root
    for (let i = 0; i < word.length; i++) {
      const currentChar = word.charAt(i)
      if (!node.children.has(currentChar)) {
        node.children.set(currentChar, new TrieNode(currentChar))
      }
      node = node.children.get(currentChar)!
    }
    node.isEndOfAWord = true
    return this
  }

  /**
   * Whether the trie has a given word.
   *
   * @param {string} word
   * @memberof Trie
   * @returns {boolean}
   */
  public hasWord(word: string): boolean {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      const currentChar = word.charAt(i)
      if (!node.children.has(currentChar)) {
        return false
      } else {
        node = node.children.get(currentChar)!
      }
    }
    return node.isEndOfAWord
  }

  /**
   * fetch eligible words, which have the given prefix
   *
   * @param {string} keyword
   * @memberof Trie
   * @returns {Array<string>}
   */
  public prefixSearch(keyword: string): Array<string> {
    if (keyword.length === 0) return []

    let node = this.root
    for (let i = 0; i < keyword.length; i++) {
      const currentChar = keyword.charAt(i)
      if (!node.children.has(currentChar)) {
        return []
      } else {
        node = node.children.get(currentChar)!
      }
    }

    return this.buildPrefixWords(node, keyword)
  }

  private buildPrefixWords(node: TrieNode, prefix: string, acc: string[] = []): string[] {
    if (node.isEndOfAWord === true) {
      acc.push(prefix)
    }
    node.children.forEach((node, character) => {
      this.buildPrefixWords(node, prefix + character, acc)
    })
    return acc
  }
}
