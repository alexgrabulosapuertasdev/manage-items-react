import './App.css'
import { useItems } from './hooks/useItems.ts'
import Form from './components/Form.tsx'
import ItemList from './components/ItemList.tsx'
import { useSEO } from './hooks/useSEO.ts'


function App() {
  const { items, addItem, deleteItem } = useItems()

  useSEO({
    title: `[${items.length}] - Manejo de objetos`,
    description: 'Prueba técnica en React con TypeScript'
  })

  return (
    <main>
        <section>
          <h1>Prueba técnica</h1>
          <Form addItem={addItem} />
        </section>

        <ItemList items={items} deleteItem={deleteItem} />
    </main>
  )
}

export default App
