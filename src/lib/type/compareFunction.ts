export enum ComparableReturn {
  LARGER = 1,
  EQUAL = 0,
  SMALLER = -1
}

export type CompareFunction<T> = (left: T, right: T) => ComparableReturn

export const compare: CompareFunction<any> = (left: any, right: any) => {
  if (left === right) {
    return 0
  } else {
    if (left > right) {
      return 1
    } else {
      return -1
    }
  }
}
