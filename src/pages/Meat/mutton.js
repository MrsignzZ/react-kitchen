import React from 'react'
import CardList from '../../components/CardList'

export default class Mutton extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='羊肉' />
      </div>
    )
  }
}