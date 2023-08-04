import React, { Component } from 'react'
import './spinner.css';
export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="lds-spinner text-centre"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}

export default Spinner
