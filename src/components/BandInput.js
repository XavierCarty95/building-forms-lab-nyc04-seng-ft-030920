// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {

  state = {
    name: ''

  }

  handleInput = (event) => {

    this.setState({
      name: event.target.value

    })
 }

 handleSubmit = (evt) => {
  evt.preventDefault()
  this.props.addBand(this.state)
  this.setState({
    name: '',
  })
 }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="Band">
        <input type = "text" value={this.state.name} onChange={this.handleInput}/>

        </label>
         <input type = "submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
