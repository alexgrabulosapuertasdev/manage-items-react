import { useState } from "react"
import { Item, ItemId } from "../../types"

export const useItems = () => {
    const [items, setItems] = useState<Item[]>([])

    const addItem = (value: string) => {
        setItems((currentValue) => {
            return [...currentValue, { id: crypto.randomUUID(), name: value }]
          })
    }

    const deleteItem = (id: ItemId) => {
        setItems((currentValue) => {
            return currentValue.filter(item => item.id !== id)
        })
    }

    return { items, addItem, deleteItem }
}
