import React from 'react'
import CardList from '../../components/CardList'

export default class Noodles extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='面' />
      </div>
    )
  }
}