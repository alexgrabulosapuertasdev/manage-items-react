export type ItemId = `${string}-${string}-${string}-${string}-${string}`

export interface Item {
  id: ItemId
  name: string
}
