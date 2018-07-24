import React, { Component } from 'react'
import './PlayaList.css'
import logo from './mojito.ico'
class App extends Component {
  render() {
    return (
      <div className="PlayaList">

        <header className="PlayaList-header">
          <img src={logo} className="PlayaList-logo" alt="logo" />
          <h1 className="PlayaList-title">PlayaList</h1>
        </header>

        <div className="PlayaList-list">

          <div className="PlayaList-item">
            <img src="/images/tongs.jpg" alt="Tongs" />
            <div>Tongs</div>
          </div>

          <div className="PlayaList-item">
            <img src="/images/ballon.jpg" alt="Ballon de plage" />
            <div>Ballon de plage</div>
          </div>

          <div className="PlayaList-item">
            <img src="/images/raquettes.jpg" alt="Raquettes de plage" />
            <div>Raquettes de plage</div>
          </div>

          <div className="PlayaList-item">
            <img src="/images/bouee-grenouille.jpg" alt="Bouée grenouille" />
            <div>Bouée grenouille</div>
          </div>

        </div>
      </div>
    )
  }
}

export default App
