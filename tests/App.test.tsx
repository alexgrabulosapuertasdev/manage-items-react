import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import  React from 'react'
import { describe, expect, test } from 'vitest'
import App from '../src/App'

describe('<App />', () => {
    test('should add items and delete them', async () => {
        const user = userEvent.setup()

        render(<App />)

        const input = screen.getByRole('textbox')
        expect(input).toBeDefined()

        const form = screen.getByRole('form')
        expect(form).toBeDefined()

        const formButton = form.querySelector('button')
        expect(formButton).toBeDefined()

        const firstValue = crypto.randomUUID()
        await user.type(input, firstValue)
        await user.click(formButton!)

        const secondValue = crypto.randomUUID()
        await user.type(input, secondValue)
        await user.click(formButton!)

        const list = screen.getByRole('list')
        expect(list.childNodes).toHaveLength(2)

        await user.click( screen.getByText(firstValue))
        expect(list.childNodes).toHaveLength(1)

        await user.click(screen.getByText(secondValue))
        expect(screen.getByText('No hay elementos en la lista')).toBeDefined()
    })
})
