import { Trie } from '../../../src'

describe('Trie', () => {
  describe('#hasWord: check if a given word was inserted', () => {
    const trie = new Trie()
    trie.insert('duck').insert('bird').insert('buck').insert('birdie')

    it('return true if it is inserted', () => {
      expect(trie.hasWord('duck')).toBeTruthy()
      expect(trie.hasWord('birdie')).toBeTruthy()
      expect(trie.hasWord('buck')).toBeTruthy()
      expect(trie.hasWord('bird')).toBeTruthy()
    })

    it('return false if the word is not inserted', () => {
      expect(trie.hasWord('duckie')).toBeFalsy()
      expect(trie.hasWord('bi')).toBeFalsy()
    })

    it('return false if with empty string', () => {
      expect(trie.hasWord('')).toBeFalsy()
    })
  })

  describe('#prefixSearch: search prefixed words', () => {
    const trie = new Trie()
    trie
      .insert('duck')
      .insert('duckie')
      .insert('ducky')
      .insert('dive')
      .insert('dove')
      .insert('do')
      .insert('bird')

    it('return a list of string which a given prefix', () => {
      expect(trie.prefixSearch('duck')).toEqual(['duck', 'duckie', 'ducky'])
      expect(trie.prefixSearch('bird')).toEqual(['bird'])
    })

    it('return an empty list if the prefix is invalid', () => {
      expect(trie.prefixSearch('bold')).toEqual([])
      expect(trie.prefixSearch('birdie')).toEqual([])
      expect(trie.prefixSearch('')).toEqual([])
    })
  })
})
