import React from 'react'
import CardList from '../../components/CardList'

export default class Vegetarian extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='素食' />
      </div>
    )
  }
}