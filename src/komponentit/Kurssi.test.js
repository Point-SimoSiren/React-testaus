import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Kurssi from './Kurssi'

test('Kurssi komponentti renderöityy oikein', () => {
  
    const kurssi = {
        nimi: "Testikurssi",
        laajuus: "4"
      }
    
    
      const mockHandler = jest.fn()
    
    render(<Kurssi kurssi={kurssi} poistaKurssi={mockHandler} />)
  
    const element = screen.getByText('Testikurssi 4 OSP')
    expect(element).toBeDefined()
  })


test('delete napin painallus kutsuu napin tapahtumankäsittelijää yhden kerran', async () => {
  const kurssi = {
    nimi: "Testikurssi",
    laajuus: "4"
  }

  const mockHandler = jest.fn()

  render(
    <Kurssi kurssi={kurssi} poistaKurssi={mockHandler} />
  )

  const user = userEvent.setup()
  const deleteButton = screen.getByText('poista')
  await user.click(deleteButton)

  expect(mockHandler.mock.calls).toHaveLength(1)
})
