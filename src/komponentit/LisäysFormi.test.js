import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LisäysFormi from './LisäysFormi'
import userEvent from '@testing-library/user-event'

test('LisäysFormi välittää oikeat tiedot submitissa', async () => {
  const user = userEvent.setup()
  const luoKurssi = jest.fn()
  const setShowAddForm = jest.fn()

  render(<LisäysFormi setShowAddForm={setShowAddForm} luoKurssi={luoKurssi} />)

  const input1 = screen.getByPlaceholderText('Kurssin nimi')
  const input2 = screen.getByPlaceholderText('Laajuus (osp)')

  const saveButton = screen.getByText('Tallenna')

  await user.type(input1, 'SQL perusteet')
  await user.type(input2, '3')
  await user.click(saveButton)

  expect(luoKurssi.mock.calls).toHaveLength(1)
  expect(luoKurssi.mock.calls[0][0]).toBe('SQL perusteet')
  expect(luoKurssi.mock.calls[0][1]).toBe('3')

})