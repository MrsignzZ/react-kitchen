import React from 'react'
import CardList from '../../components/CardList'

export default class Staple extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='主食' />
      </div>
    )
  }
}