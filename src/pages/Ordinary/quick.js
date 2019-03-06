import React from 'react'
import CardList from '../../components/CardList'

export default class Quick extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='快手菜' />
      </div>
    )
  }
}