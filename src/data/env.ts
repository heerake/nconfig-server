enum EnvType {
  Prd = 'prd',
  Dev = 'dev'
}

class Env {
  envType: EnvType

  constructor(envType: EnvType) {
    this.envType = envType
  }
}

export { Env }
export default EnvType