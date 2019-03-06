import React from 'react'
import CardList from '../../components/CardList'

export default class Meal extends React.Component{

  render() {
    return (
      <div className="wrap">
        <CardList keyword='下饭菜'/>
      </div>
    )
  }
}