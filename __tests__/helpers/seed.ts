export const fetchArray = (length: number): number[] => {
  const result = []
  while (length > 0) {
    result.push(Math.floor(Math.random() * length))
    length --
  }
  return result
}
