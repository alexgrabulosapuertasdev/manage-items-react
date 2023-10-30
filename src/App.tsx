import { useState, FormEvent } from 'react'
import './App.css'

type ItemId = `${string}-${string}-${string}-${string}-${string}`

interface Item {
  id: ItemId
  name: string
}

function App() {
  const [ items, setItems ] = useState<Item[]>([])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const { elements } = event.currentTarget

    const input = elements.namedItem('itemName')
    const isValidInput = input instanceof HTMLInputElement
    if (input == null  || !isValidInput) return

    const inputValue = input.value
    setItems((currentValue) => {
      return [...currentValue, { id: crypto.randomUUID(), name: inputValue }]
    })

    input.value = ''
  }

  const deleteElement = (id: ItemId) => {
    setItems((currentValue) => {
      return currentValue.filter(item => item.id !== id)
    })
  }

  return (
    <main>
        <section>
          <h1>Prueba técnica</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="itemName">Introduce el nombre</label>
            <input type="text" id='itemName' required placeholder='Introduce aquí el nombre'/>
            <button>Añade el objeto!</button>
          </form>
        </section>

        <section className='items'>
          <h2>Lista de elementos</h2>
          <ul className='items__list'>
            {
              items.map((item) => (
                <li key={item.id}>
                  <button onClick={() => deleteElement(item.id)}>
                    { item.name }
                  </button>
                </li>
              ))
            }
          </ul>
        </section>
    </main>
  )
}

export default App
