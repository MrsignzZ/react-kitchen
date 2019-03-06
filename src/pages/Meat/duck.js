import React from 'react'
import CardList from '../../components/CardList'

export default class Duck extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='鸭肉' />
      </div>
    )
  }
}