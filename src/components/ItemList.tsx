import { Item, ItemId } from "../../types"

type Props = {
    items: Item[],
    deleteItem: (id: ItemId) => void,
}

function ItemList({ items, deleteItem }: Props) {
    return (
        <section className='items'>
          <h2>Lista de elementos</h2>
          {
            items.length === 0
            ?
            <strong>No hay elementos en la lista</strong>
            :
            <ul className='items__list'>
              {
                items.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => deleteItem(item.id)}>
                        { item.name }
                    </button>
                  </li>
                ))
              }
            </ul>
          }
        </section>
    )
}

export default ItemList
