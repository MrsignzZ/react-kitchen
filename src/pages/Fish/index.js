import React from 'react'
import CardList from '../../components/CardList'

export default class Fish extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='鱼' />
      </div>
    )
  }
}