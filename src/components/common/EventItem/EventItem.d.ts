export interface IData {
  temperature?: number,
  humidity?: number,
  type?: string,
  albumcover?: string,
  artist?: string,
  track?: {name: string, length: string},
  volume?: number,
  buttons?: string[],
  image?: string
}

export interface IEventItem {
  type?: string, 
  title?: string, 
  source?: string, 
  time?: string, 
  description?: string | null, 
  icon?: string, 
  size?: string, 
  data?: IData | null
}