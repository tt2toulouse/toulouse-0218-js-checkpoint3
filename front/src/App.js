import React, { Component } from 'react'
import Item from './Item'
import './PlayaList.css'
import logo from './mojito.ico'

class App extends Component {
  state={
    items:[]
  }

  componentDidMount () {
    fetch('/api/items')
    .then(res => res.json())
    .then(items => this.setState({
      items: items
    }))
  }
  
  handleSubmit = () => {

  }

  render() {
    return (
      <div className="PlayaList">

        <header className="PlayaList-header">
          <img src={logo} className="PlayaList-logo" alt="logo" />
          <h1 className="PlayaList-title">PlayaList</h1>
        </header>

        {/* <div className="PlayaList-list">
          <form>
            <h5>Ajouter un item</h5>
            <div>
              <input name="name" placeholder="Nom" />
              <input name="picture" placeholder="image" />
              <button type="submit">
                <span className="icon-checkmark"></span>
              </button>
            </div>
          </form>
        </div> */}
        
          {
            this.state.items.map(
              (item) => <Item
              item={item} />
            )
          }


      </div>
    )
  }
}

export default App
