import Env from './env'
import Pair from './pair'

class Area {
  private id: string
  private env: { [key: string]: { [k: string]: Pair } }

  constructor(areaID: string) {
    this.id = areaID

    this.env = {
      [Env.Dev]: {},
      [Env.Prd]: {}
    }
  }
  getEnv(envType: Env) {
    return this.env[envType]
  }
  get(env: Env, key: string) {
    return this.getEnv(env)[key].get()
  }
  set(env: Env, key: string, value: string) {
    (this.getEnv(env)[key] = this.getEnv(env)[key] || new Pair(key)).set(value)
  }
  getAllEnv() {
    return this.env
  }
}

export default Area