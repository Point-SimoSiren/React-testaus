import React from 'react'
import './Tyyli.css'
import Kurssi from './Kurssi'

const Kurssilistaus = ({ kurssit, poistaKurssi }) => {

  return (
    <div className="App">
      <h2>Kurssit</h2>

      {kurssit && kurssit.map(kurssi =>
        <Kurssi kurssi={kurssi} poistaKurssi={poistaKurssi} />
      )
      }
    </div>
  )
}

export default Kurssilistaus
