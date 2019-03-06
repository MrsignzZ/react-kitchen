import React from 'react'
import CardList from '../../components/CardList'

export default class Bake extends React.Component {

  render() {
    return (
      <div className="wrap">
        <CardList keyword='烘焙' />
      </div>
    )
  }
}