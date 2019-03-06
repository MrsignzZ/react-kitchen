import React from 'react'
import CardList from '../../components/CardList'

export default class Pock extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='猪肉' />
      </div>
    )
  }
}