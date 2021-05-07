export interface TrieType {
  insert: (word: string) => ThisType<TrieType>
  hasWord: (word: string) => boolean
  prefixSearch: (keyword: string) => string[]
}
