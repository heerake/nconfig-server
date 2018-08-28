import EnvType from './env'
import Pair from './pair'

class Area {
  private id: string
  private env: { [key: string]: { [k: string]: Pair } }

  constructor(areaID: string) {
    this.id = areaID

    this.env = {
      [EnvType.Dev]: {},
      [EnvType.Prd]: {}
    }
  }
  getEnv(envType: EnvType) {
    return this.env[envType]
  }
  get(env: EnvType, key: string) {
    return this.getEnv(env)[key].get()
  }
  set(env: EnvType, key: string, value: string) {
    (this.getEnv(env)[key] = this.getEnv(env)[key] || new Pair(key)).set(value)
  }
  getAllEnv() {
    return this.env
  }
}

export default Area