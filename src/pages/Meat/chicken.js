import React from 'react'
import CardList from '../../components/CardList'

export default class Chicken extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='鸡肉' />
      </div>
    )
  }
}