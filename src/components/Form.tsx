import { FormEvent } from "react"

type Props = {
    addItem: (value: string) => void,
}

function Form({ addItem }: Props) {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        const { elements } = event.currentTarget
    
        const input = elements.namedItem('itemName')
        const isValidInput = input instanceof HTMLInputElement
        if (input == null  || !isValidInput) return
    
        addItem(input.value)
    
        input.value = ''
    }

    return (
        <form onSubmit={handleSubmit} aria-label="Añadir elementos a la lista">
            <label htmlFor="itemName">Introduce el nombre</label>
            <input type="text" id='itemName' required placeholder='Introduce aquí el nombre'/>
            <button>Añade el objeto!</button>
      </form>
    )
}

export default Form
