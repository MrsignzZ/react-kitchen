import React from 'react'
import CardList from '../../components/CardList'

export default class Mushrooms extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='菇' />
      </div>
    )
  }
}