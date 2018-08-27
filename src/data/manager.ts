import Area from './area'
import Env from './env'
import clientManager from '../register/client'

class AreaManager {
  private areas: { [id: string]: Area }
  constructor() {
    this.areas = {}
  }
  addArea(id: string) {
    return this.areas[id] = this.areas[id] || new Area(id)
  }
  getArea(id: string) {
    return this.areas[id]
  }
  get(id: string, env: Env, key: string) {
    let area = this.getArea(id)

    return area.get(env, key)
  }
  set(id: string, env: Env, key: string, value: string) {
    let area = this.getArea(id)

    area.set(env, key, value)

    clientManager.update(id, env, key, value)
  }
  getAllAreas() {
    return this.areas
  }
}

let manager = new AreaManager()

manager.addArea('111')
manager.set('111', Env.Dev, 'test', '123')
manager.set('111', Env.Dev, 'test2', '1232')

export default manager