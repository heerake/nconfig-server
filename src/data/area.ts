import EnvEnum from '../enum/EnvEnum'
import Pair from './pair'

class Area {
  private id: string
  private env: { [key: string]: { [k: string]: Pair } }

  constructor(areaID: string) {
    this.id = areaID

    this.env = {
      [EnvEnum.Dev]: {},
      [EnvEnum.Prd]: {}
    }
  }
  getEnv(envType: EnvEnum) {
    return this.env[envType]
  }
  getValue(env: EnvEnum, key: string) {
    return this.getEnv(env)[key].get()
  }
  setValue(env: EnvEnum, key: string, value: string) {
    (this.getEnv(env)[key] = this.getEnv(env)[key] || new Pair(key)).set(value)
  }
  getAllEnv() {
    return this.env
  }
}

export default Area