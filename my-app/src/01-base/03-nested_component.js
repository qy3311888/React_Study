import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}

class Navbar extends Component {
  render() {
    return <div>Navbar</div>
  }
}

function Swiper() {
  return <div>Swiper</div>
}

const Tabbar = () => <div>Tabbar</div>
