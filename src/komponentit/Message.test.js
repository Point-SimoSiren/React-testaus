import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Message from './Message.jsx'

test('Message komponentti renderöityy oikein', () => {
  
  const message = "Testaillaan..."

  render(<Message message={message} />)

  const element = screen.getByText('Testaillaan...')
  expect(element).toBeDefined()
})

