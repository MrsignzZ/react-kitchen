import React from 'react'
import { NavLink } from "react-router-dom";
import { Card } from "antd";
import './index.less'
import Axios from '../../api'

const { Meta } = Card
export default class CardList extends React.Component{

  state = {
    cardList: []
  }

  componentDidMount() {
    this.getMenuAPIList(this.props.keyword)
  }

  componentWillReceiveProps(nextProps) {
    this.getMenuAPIList(nextProps.keyword)
  }

  renderCardList = (data) => {
    return data.map((item) => {
      return (
        <NavLink key={item.id} to={{
          pathname: `/common/detail/${item.id}`,
          state: item
        }} >
          <Card
            hoverable
            className="card"
            cover={<img alt="example" src={item.pic} />}
            onClick={this.openMenuDetail}
            id={item.id}
          >
            <Meta
              style={{ whiteSpace: 'nowrap' }}
              title={item.name}
              description={item.tag}
            />
          </Card>
        </NavLink>
      )
    })
  }

  // 从接口获取菜单列表数据
  getMenuAPIList = (keyword) => {
    const num = 12
    Axios
      .jsonp({
        url: `http://api.jisuapi.com/recipe/search?keyword=${keyword}&num=${num}&appkey=9d1f6ec2fd2463f7`
      })
      .then(res => {
        if (res.status === 0) {
          let cardList = this.renderCardList(res.result.list)
          this.setState({
            cardList: cardList
          })
        }
      })
  }
  render() {
    return (
      <div className="content">
        {this.state.cardList}
      </div>
    )
  }
}