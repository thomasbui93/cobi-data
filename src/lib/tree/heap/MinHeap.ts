export class MinHeap {
  private heapList: number[] = [0]
  private size = 0

  public insert(value: number): void {
    this.heapList.push(value)
    this.size = this.size + 1
    this.perUp()
  }

  private perUp(): void {
    let index = this.size
    while (index / 2 > 0) {
      const parentIndex = Math.floor(index / 2)
      if (this.heapList[index] < this.heapList[parentIndex]) {
        const tmp = this.heapList[parentIndex]
        this.heapList[parentIndex] = this.heapList[index]
        this.heapList[index] = tmp
      }
      index = parentIndex
    }
  }

  public toArray(): number[] {
    return this.heapList
  }
}
