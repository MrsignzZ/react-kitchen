import React from 'react'
import CardList from '../../components/CardList'

export default class Fruits extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='果子' />
      </div>
    )
  }
}