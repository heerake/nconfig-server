import ValueItem from './valueitem'

class Pair {
  private key: string
  private values: ValueItem[]

  constructor(key: string) {
    this.key = key
    this.values = []
  }
  set(value: string) {
    let newValueItem = new ValueItem(value)
    this.values.push(newValueItem)
  }
  get() {
    return this.values[this.values.length - 1]
  }
}

export default Pair