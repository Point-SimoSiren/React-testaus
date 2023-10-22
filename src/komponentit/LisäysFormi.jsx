import React, { useState } from 'react'
import './Tyyli.css'

const LisäysFormi = ({ setShowAddForm, luoKurssi }) => {

  const [name, setName] = useState('')
  const [osp, setOsp] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    luoKurssi( //<--------- luoKurssi() on saatu propsina App.jsx komponentilta
      name,
      osp,
    )
    setName('')
    setOsp('')
  }

  return (
    <div className="formDiv">

      <h2>Lisää uusi kurssi</h2>

      <form onSubmit={handleSubmit}>

        <input id="nimiInput"
          placeholder="Kurssin nimi"
          value={name}
          onChange={({target}) => setName(target.value) }
        />
        <input id="laajuusInput"
          placeholder="Laajuus (osp)"
          value={osp}
          onChange={({target}) => setOsp(target.value)}
        />

        <button className="nappi" id="tallennusNappi" type="submit">Tallenna</button>
      </form>

      <button className="nappi"
        onClick={() => setShowAddForm(false)}>Piilota lomake</button>
    </div>
  )
}

export default LisäysFormi
