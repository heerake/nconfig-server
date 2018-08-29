import Area from './area'
import EnvEnum from '../enum/EnvEnum'
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
  deleteArea(id: string) {
    let area = this.areas[id]

    delete this.areas[id]

    return area
  }
  get(id: string, env: EnvEnum, key: string) {
    let area = this.getArea(id)

    return area.getValue(env, key)
  }
  set(id: string, env: EnvEnum, key: string, value: string) {
    let area = this.getArea(id)

    area.setValue(env, key, value)

    clientManager.update(id, env, key, value)
  }
  getAllAreas() {
    return this.areas
  }
}

let manager = new AreaManager()

manager.addArea('111')
manager.set('111', EnvEnum.Dev, 'test', '123')
manager.set('111', EnvEnum.Dev, 'test2', '1232')

export default manager