import { shuffle } from "lodash"

export const fetchArray = (length: number): number[] => {
  const result = []
  while (length > 0) {
    result.push(Math.floor(Math.random() * length))
    length --
  }
  return result
}

export const uniqueArray = (length: number): number[] => {
  const result = []
  while (length > 0) {
    result.push(length * 10 + Math.floor(Math.random() * 10))
    length --
  }
  return result
}

export const uniqueArrayShuffle = (length: number): number[] => {
  return shuffle(uniqueArray(length))
}
