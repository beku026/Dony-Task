export interface IOffice {
  id: number
  name: string
  avatar: string
  position: string
  object_id: number
}

export interface IObjects {
  type: string
  id: number
  left: number
  top: number
  angle: number
}

export interface IAllTypes {
  type: string
  id: number
  left: number
  top: number
  angle: number
  user: IOffice[]
}
