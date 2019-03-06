import React from 'react'
import { connect } from "react-redux";
import CardList from '../../components/CardList'

class Search extends React.Component{

  render() {
    return(
      <div className="wrap">
        <CardList keyword={this.props.keyword}/>
      </div>
    )
  }
}

export default connect(
  state => ({keyword : state}),
  {}
)(Search)