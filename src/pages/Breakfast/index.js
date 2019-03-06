import React from 'react'
import CardList from '../../components/CardList'

export default class Breakfast extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='早餐' />
      </div>
    )
  }
}