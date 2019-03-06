import React from 'react'
import CardList from '../../components/CardList'

export default class Soup extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='汤' />
      </div>
    )
  }
}