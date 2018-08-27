import ValueItem from './valueitem'

class Pair {
  public key: string
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
    let item = this.values[this.values.length - 1]
    return item && item.value
  }
}

export default Pair