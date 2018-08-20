class ValueItem {
  value: string
  createTime: Date

  constructor(value: string) {
    this.value = value
    this.createTime = new Date()
  }
}

export default ValueItem